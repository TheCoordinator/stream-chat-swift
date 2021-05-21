(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),m=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=m(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=m(a),d=n,h=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return a?c.a.createElement(h,r(r({ref:t},o),{},{components:a})):c.a.createElement(h,r({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var o=2;o<i;o++)l[o]=a[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),c=a(7),i=(a(0),a(125)),l={},r={unversionedId:"guides/attachments-migration",id:"guides/attachments-migration",isDocsHomePage:!1,title:"attachments-migration",description:"Attachments v4.x migration",source:"@site/docs/guides/attachments-migration.md",slug:"/guides/attachments-migration",permalink:"/stream-chat-swift/guides/attachments-migration",editUrl:"https://github.com/GetStream/stream-chat-swift/edit/main/stream-chat-swift-docs/docs/guides/attachments-migration.md",version:"current",sidebar:"docs",previous:{title:"Debugging",permalink:"/stream-chat-swift/guides/debugging"},next:{title:"Controllers Overview",permalink:"/stream-chat-swift/controllers/controllers-overview"}},s=[{value:"Send attachments",id:"send-attachments",children:[{value:"File/image attachments",id:"fileimage-attachments",children:[]},{value:"Custom attachments",id:"custom-attachments",children:[]},{value:"Summary",id:"summary",children:[]}]},{value:"Get attachments",id:"get-attachments",children:[{value:"File attachments",id:"file-attachments",children:[]},{value:"Image attachments",id:"image-attachments",children:[]},{value:"Giphy attachments",id:"giphy-attachments",children:[]},{value:"Link preview attachments",id:"link-preview-attachments",children:[]},{value:"Custom attachments",id:"custom-attachments-1",children:[]},{value:"Changes summary",id:"changes-summary",children:[]}]}],o={toc:s};function m(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"attachments-v4x-migration"},"Attachments v4.x migration"),Object(i.b)("h2",{id:"send-attachments"},"Send attachments"),Object(i.b)("p",null,"In both ",Object(i.b)("inlineCode",{parentName:"p"},"v4.x")," and ",Object(i.b)("inlineCode",{parentName:"p"},"v3.2")," the sequence of steps is the same:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"[1]")," create a controller for the channel the message should be sent to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"[2]")," create attachments that should be added to the message"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"[3]")," send the message with attachments using the controller")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift",metastring:"{7-9}","{7-9}":!0},'// [1] Create a controller\nlet channelController = ChatChannelController(\n    for: ChannelId(type: .messaging, id: "general")\n)\n\n// [2] Create attachments (\ud83d\udea8 has changed in `v4.x`)\nlet attachments = [\n  ...\n]\n\n// [3] Send the message\nchannelController.createNewMessage(\n    text: "Hey, have a look at this one",\n    attachments: attachments,\n    completion: { result in\n      // handle the result\n      print(result)\n    }\n)\n')),Object(i.b)("p",null,"Let's see how to create ",Object(i.b)("strong",{parentName:"p"},"file/image")," and ",Object(i.b)("strong",{parentName:"p"},"custom")," attachments in ",Object(i.b)("inlineCode",{parentName:"p"},"v4.x")," and make the compiler happy."),Object(i.b)("h3",{id:"fileimage-attachments"},"File/image attachments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Create an array of `AttachmentEnvelope` objects\nlet attachments: [AttachmentEnvelope] = [\n  // Add file attachment by creating `ChatMessageAttachmentSeed`\n  ChatMessageAttachmentSeed(localURL: fileURL, type: .file),\n  // Add image attachment by creating `ChatMessageAttachmentSeed`\n  ChatMessageAttachmentSeed(localURL: imageURL, type: .image)\n]\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Create an array of `AnyAttachmentPayload` objects\nlet attachments: [AnyAttachmentPayload] = [\n  // Add file attachment by creating `AnyAttachmentPayload`\n  try AnyAttachmentPayload(localFileURL: fileURL, attachmentType: .file),\n  // Add image attachment by creating `AnyAttachmentPayload`\n  try AnyAttachmentPayload(localFileURL: imageURL, attachmentType: .image)\n]\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".file")," and ",Object(i.b)("inlineCode",{parentName:"p"},".image")," attachments are the only built-in attachment types that can be added to the message manually."),Object(i.b)("h3",{id:"custom-attachments"},"Custom attachments"),Object(i.b)("p",null,"To add a custom attachments to the message the custom type has to be created first.\nThis is true for both ",Object(i.b)("inlineCode",{parentName:"p"},"v3.2")," and ",Object(i.b)("inlineCode",{parentName:"p"},"v4.x")," however there're some differences so let's see what they are:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'// Declare a custom type conforming to `AttachmentEnvelope`\nstruct Product: AttachmentEnvelope {\n    let type: AttachmentType = .custom("product")\n\n    let name: String\n    let price: Int\n}\n\n// Create a custom attachment\nlet iPhone = Product(name: "iPhone 12 Pro", price: 999)\n\n// Create an array of `AttachmentEnvelope` objects\nlet attachments: [AttachmentEnvelope] = [\n  // Add custom attachment instance directly\n  iPhone\n]\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'// Declare a custom type conforming to `AttachmentPayload`\nstruct Product: AttachmentPayload {\n    static let type: AttachmentType = "product"\n\n    let name: String\n    let price: Int\n}\n\n// Create an attachment payload\nlet iPhone = Product(name: "iPhone 12 Pro", price: 999)\n\n// Create an array of `AnyAttachmentPayload` objects\nlet attachments: [AnyAttachmentPayload] = [\n  // Create `AnyAttachmentPayload` that wraps custom attachment payload\n  AnyAttachmentPayload(payload: iPhone)\n]\n')),Object(i.b)("h3",{id:"summary"},"Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"th"},"v3.2")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"th"},"v4.x")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"An array of ",Object(i.b)("inlineCode",{parentName:"td"},"AttachmentEnvelope")," objects is passed when creating a message"),Object(i.b)("td",{parentName:"tr",align:null},"An array of ",Object(i.b)("inlineCode",{parentName:"td"},"AnyAttachmentPayload")," is passed when creating a message")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Attachments of ",Object(i.b)("inlineCode",{parentName:"td"},".file/.image")," type are added via ",Object(i.b)("inlineCode",{parentName:"td"},"ChatMessageAttachmentSeed")),Object(i.b)("td",{parentName:"tr",align:null},"Attachments of ",Object(i.b)("inlineCode",{parentName:"td"},".file/.image")," type are added via ",Object(i.b)("inlineCode",{parentName:"td"},"AnyAttachmentPayload"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Custom attachment must conform to ",Object(i.b)("inlineCode",{parentName:"td"},"AttachmentEnvelope")," protocol and can be directly passed to ",Object(i.b)("inlineCode",{parentName:"td"},"createMessage")),Object(i.b)("td",{parentName:"tr",align:null},"Custom attachment must conform to ",Object(i.b)("inlineCode",{parentName:"td"},"AttachmentPayload")," protocol and wrapped by ",Object(i.b)("inlineCode",{parentName:"td"},"AnyAttachmentPayload")," before passing to ",Object(i.b)("inlineCode",{parentName:"td"},"createMessage"))))),Object(i.b)("h2",{id:"get-attachments"},"Get attachments"),Object(i.b)("p",null,"In both ",Object(i.b)("inlineCode",{parentName:"p"},"v4.x")," and ",Object(i.b)("inlineCode",{parentName:"p"},"v3.2")," the sequence of steps is the same:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"[1]")," get a ",Object(i.b)("inlineCode",{parentName:"li"},"ChatMessage")," model (",Object(i.b)("a",{parentName:"li",href:"working-with-messages"},"Working with messages"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"[2]")," get all attachments of the required type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"[3]")," access attachment fields")),Object(i.b)("p",null,"Let's see how at steps ",Object(i.b)("strong",{parentName:"p"},"[2]")," and ",Object(i.b)("strong",{parentName:"p"},"[3]")," look in ",Object(i.b)("inlineCode",{parentName:"p"},"v4.x")," for different kind of attachments."),Object(i.b)("h3",{id:"file-attachments"},"File attachments"),Object(i.b)("p",null,"File attachment requires prior uploading before the message is sent. The local state is exposed for ",Object(i.b)("inlineCode",{parentName:"p"},".file")," attachments to track how the uploading goes."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get `.file` attachments\nlet fileAttachments = message.attachments\n  .compactMap { $0 as? ChatMessageDefaultAttachment }\n  .filter { $0.type == .file }\n\n// Get the first attachment\nif let file = fileAttachments.first {\n  if let localState = file.localState, let localURL = file.localURL {\n    // Attachment is being uploaded, use local URL to show a preview\n    print(localState, localURL)\n  } else if let fileURL = file.url {\n    // Attachment is uploaded, use remote url\n    print(fileURL)\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get the first `.file` attachment\nif let file = message.fileAttachments.first {\n  // Show file preview url. If attachment is being uploaded this will be the local URL.\n  print(file.assetURL)\n\n  if let uploadingState = file.uploadingState {\n    // Attachment is being uploaded, handle uploading progress\n    print(uploadingState)\n  }\n}\n")),Object(i.b)("h3",{id:"image-attachments"},"Image attachments"),Object(i.b)("p",null,"Image attachment requires prior uploading before the message is sent. The local state is exposed for ",Object(i.b)("inlineCode",{parentName:"p"},".image")," attachments to track how the uploading goes."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("p",null,"Image attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageDefaultAttachment"),". Mandatory fields are ",Object(i.b)("strong",{parentName:"p"},"optinal")," because of ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageDefaultAttachment")," being used for all built-in attachment types."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get `.image` attachments\nlet imageAttachments = message.attachments\n  .compactMap { $0 as? ChatMessageDefaultAttachment }\n  .filter { $0.type == .image }\n\n// Get the first attachment\nif let image = imageAttachments.first {\n  if let localState = image.localState, let localURL = image.localURL {\n    // Attachment is being uploaded, use local URL to show a preview\n    print(localState, localURL)\n  } else if let imageURL = image.imageURL {\n    // Attachment is uploaded, use remote url\n    print(imageURL)\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("p",null,"Image attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageImageAttachment"),". Mandatory fields are ",Object(i.b)("strong",{parentName:"p"},"non-optinal")," and can be accessed directly on attachment."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get the first `.image` attachment\nif let image = message.imageAttachments.first {\n  // Show a preview\n  print(image.previewURL)\n\n  if let uploadingState = image.uploadingState {\n    // Attachment is being uploaded, handle uploading progress\n    print(uploadingState)\n  }\n}\n")),Object(i.b)("h3",{id:"giphy-attachments"},"Giphy attachments"),Object(i.b)("p",null,"The ephemeral message containing giphy attachment will be created when ",Object(i.b)("inlineCode",{parentName:"p"},"/giphy")," command is used."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("p",null,"Giphy attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageDefaultAttachment"),". Mandatory fields are ",Object(i.b)("strong",{parentName:"p"},"optinal")," because of ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageDefaultAttachment")," being used for all built-in attachment types."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get `.giphy` attachments\nlet giphyAttachments = message.attachments\n  .compactMap { $0 as? ChatMessageDefaultAttachment }\n  .filter { $0.type == .giphy }\n\n// Get the first attachments\nif let giphy = giphyAttachments.first {\n  // Unwrap gif URL\n  if let gifURL = giphy.imageURL {\n    // Load and show gif\n    print(gifURL)\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("p",null,"Giphy attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageGiphyAttachment"),". Mandatory fields are ",Object(i.b)("strong",{parentName:"p"},"non-optinal")," and can be accessed directly on attachment."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get the first `.giphy` attachment\nif let giphy = message.giphyAttachments.first {\n  // Load and show gif right away\n  print(giphy.previewURL)\n}\n")),Object(i.b)("h3",{id:"link-preview-attachments"},"Link preview attachments"),Object(i.b)("p",null,"The link attachment will be added to the message automatically if the message is sent with the text containing the URL."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("p",null,"Giphy attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageDefaultAttachment"),". Mandatory fields are ",Object(i.b)("strong",{parentName:"p"},"optinal")," because of ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageDefaultAttachment")," being used for all built-in attachment types."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get `.link(...)` attachments\nlet linkAttachments = message.attachments\n  .compactMap { $0 as? ChatMessageDefaultAttachment }\n  .filter { $0.type.isLink }\n\n// Get the first attachment\nif let link = linkAttachments.first {\n  // Unwrap the URL\n  if let url = link.url {\n    // Show preview for url\n    print(url)\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("p",null,"Link preview attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"p"},"ChatMessageLinkAttachment"),". Mandatory fields are ",Object(i.b)("strong",{parentName:"p"},"non-optinal")," and can be accessed directly on attachment."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Get the first `.linkPreview` attachment\nif let linkPreview = message.linkAttachments.first {\n  // Handle the link\n  print(linkPreview.originalURL)\n}\n")),Object(i.b)("h3",{id:"custom-attachments-1"},"Custom attachments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 3.x")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"all built-in attachments exposed as ",Object(i.b)("inlineCode",{parentName:"li"},"ChatMessageRawAttachment")),Object(i.b)("li",{parentName:"ul"},"custom payload is stored in ",Object(i.b)("inlineCode",{parentName:"li"},"data: Data?")," fields"),Object(i.b)("li",{parentName:"ul"},"custom data should be decoded manually ",Object(i.b)("inlineCode",{parentName:"li"},"data")),Object(i.b)("li",{parentName:"ul"},"attachment ",Object(i.b)("inlineCode",{parentName:"li"},"id")," is optional")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'// Custom attachment type has to be `Decodable`\nextension Product: Decodable { /* ... */ }\n\n// Get attachments of custom type\nlet productAttachments = message.attachments\n  .compactMap { $0 as? ChatMessageRawAttachment }\n  .filter { $0.type == .custom("product") }\n\n// Get first custom attachment\nif let productAttachment = productAttachments.first {\n  // Unwrap attachment data\n  if let productData = productAttachment.data {\n    // Try to decode the custom type from data\n    let product = try JSONDecoder().decode(Product.self, from: productData)\n    // Handle custom attachment payload\n    print(product)\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Version 4.x")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"custom attachments are directly accessible on ",Object(i.b)("inlineCode",{parentName:"li"},"ChatMessage")),Object(i.b)("li",{parentName:"ul"},"custom payload fields are are directly on attachment thanks to ",Object(i.b)("inlineCode",{parentName:"li"},"dynamicMemberLookup")),Object(i.b)("li",{parentName:"ul"},"attachment ",Object(i.b)("inlineCode",{parentName:"li"},"id")," is not-optional \ud83c\udf89")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"\n// It's recommended but not required to create a typealias for custom attachment type to avoid generic stuff\ntypealias ProductAttachment = _ChatMessageAttachment<Product>\n\n// Get attachments of custom type\nlet productAttachments = message.attachments(payloadType: Product.self)\n\n// Get first custom attachment\nif let product = productAttachments.first {\n  // Access the payload fields right away\n  print(product.name)\n}\n")),Object(i.b)("h3",{id:"changes-summary"},"Changes summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"th"},"v3.2")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"th"},"v4.x")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ChatMessage")," has a single ",Object(i.b)("inlineCode",{parentName:"td"},"attachments")," field"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ChatMessage")," has multiple fields one for each attachment type (",Object(i.b)("inlineCode",{parentName:"td"},"imageAttachments/giphyAttachments/etc."),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Built-in attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"td"},"ChatMessageDefaultAttachment")," with mandatory fields being ",Object(i.b)("strong",{parentName:"td"},"optional")),Object(i.b)("td",{parentName:"tr",align:null},"Built-in attachments are exposed as arrays ",Object(i.b)("inlineCode",{parentName:"td"},"_ChatMessageAttachment<Payload>")," with concrete payload type with mandatory fields being ",Object(i.b)("strong",{parentName:"td"},"non-optional"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"To be exposed on the message custom attachment must conform to ",Object(i.b)("inlineCode",{parentName:"td"},"ChatMessageAttachment")," protocol"),Object(i.b)("td",{parentName:"tr",align:null},"In order attachment can be exposed on the message it's payload must conform to ",Object(i.b)("inlineCode",{parentName:"td"},"AttachmentPayload")," protocol")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Custom attachments are exposed as ",Object(i.b)("inlineCode",{parentName:"td"},"ChatMessageRawAttachment")),Object(i.b)("td",{parentName:"tr",align:null},"Custom attachments are exposed the same way built-in attachments are")))))}m.isMDXComponent=!0}}]);