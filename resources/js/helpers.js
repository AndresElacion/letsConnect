export const isImage = (attachment) => { // expect that given attachment file has mime
    let mime = attachment.mime || attachment.type
    mime = mime.split('/')
    return mime[0].toLowerCase() === 'image'
}