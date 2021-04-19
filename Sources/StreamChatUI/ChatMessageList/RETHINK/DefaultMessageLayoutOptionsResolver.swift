//
// Copyright © 2021 Stream.io Inc. All rights reserved.
//

import StreamChat

public typealias MessageLayoutOptionsResolver<ExtraData: ExtraDataTypes> = (
    _ indexPath: IndexPath,
    _ messages: AnyRandomAccessCollection<_ChatMessage<ExtraData>>,
    _ channel: _ChatChannel<ExtraData>
) -> ChatMessageLayoutOptions

public func DefaultMessageLayoutOptionsResolver<ExtraData: ExtraDataTypes>(
    minTimeIntervalBetweenMessagesInGroup: TimeInterval = 10
) -> MessageLayoutOptionsResolver<ExtraData> {
    { indexPath, messages, channel in
        let messageIndex = messages.index(messages.startIndex, offsetBy: indexPath.item)
        let message = messages[messageIndex]

        let isLastInGroup: Bool = {
            guard indexPath.item > 0 else { return true }
            
            let nextMessageIndex = messages.index(messages.startIndex, offsetBy: indexPath.item - 1)
            let nextMessage = messages[nextMessageIndex]

            guard nextMessage.author == message.author else { return true }
            
            let delay = nextMessage.createdAt.timeIntervalSince(message.createdAt)
            
            return delay > minTimeIntervalBetweenMessagesInGroup
        }()
        
        var options: ChatMessageLayoutOptions = []
        
        if message.isSentByCurrentUser {
            options.insert(.flipped)
        }
        if !isLastInGroup {
            options.insert(.continuousBubble)
        }
        if !isLastInGroup && !message.isSentByCurrentUser {
            options.insert(.avatarSizePadding)
        }
        if isLastInGroup {
            options.insert(.metadata)
        }
        if !message.textContent.isEmpty {
            options.insert(.text)
        }
        
        guard message.deletedAt == nil else {
            return options
        }
        
        if isLastInGroup && !message.isSentByCurrentUser {
            options.insert(.avatar)
        }
        if isLastInGroup && !message.isSentByCurrentUser && !channel.isDirectMessageChannel {
            options.insert(.authorName)
        }
        if message.quotedMessageId != nil {
            options.insert(.quotedMessage)
        }
        if message.isPartOfThread {
            options.insert(.threadInfo)
            // The bubbles with thread look like continuous bubbles
            options.insert(.continuousBubble)
        }
        if !message.reactionScores.isEmpty {
            options.insert(.reactions)
        }
        if message.lastActionFailed {
            options.insert(.error)
        }

        if !message.attachments.isEmpty {
            options.insert(.maxWidth)
        }
        
        return options
    }
}
