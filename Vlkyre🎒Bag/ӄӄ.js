("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// Baileys.generateForwardMessageContent,
// Baileys.generateWAMessageFromContent,
// Baileys.downloadContentFromMessage,
// Baileys.fetchLatestBaileysVersion,
// Baileys.prepareWAMessageMedia,
// Baileys.makeInMemoryStore,
// Baileys.MessageRetryMap,
// Baileys.jidDecode,
// Baileys.proto,
require(`../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙`);
require(`../Vlkyre🖋️Utilities/Ѷ𝖆𝖑.js`);
let { default: 𝖍𝖆𝖜ӄC } = require(`@adiwajshing/baileys`);
let Baileys = require("@adiwajshing/baileys");
let fs = require(`fs`);
let pino = require(`pino`);
let path = require(`path`);
let msgRetryCounterMap = {};
let chalk = require(`chalk`);
let goose = require("mongoose");
let FileType = require(`file-type`);
let PhoneNumber = require(`awesome-phonenumber`);
let dbAuth = require("../Vlkyre🌤️Cloud/🍂𝖘𝖖𝖑/Auth");
let dbCloudAuth = require("../Vlkyre🌤️Cloud/🌩️𝖈𝖑𝖔𝖚𝖉𝖉𝖇/dbcloud");
let { smsg, getBuffer, getSizeMedia } = require(`../Vlkyre🖋️Utilities/ɴᴇᴄᴛᴏʀ`);
let {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid,
} = require(`../Vlkyre🖋️Utilities/exif`);
let sequelize = DATABASE;
let Ѷ𝖎𝖔𝖓 = Baileys.makeInMemoryStore({
logger: pino().child({ level: `silent`, stream: `Ѷ𝖎𝖔𝖓` }),
});
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
async function Ѷ𝖎𝖔𝖓ᴇᴏɴᴇ() {
try {
await goose
.connect(MONGOOSE, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((error) => {
console.error(
chalk.red(`❌𝐄𝐫𝐫𝐨𝐫: Unable to Connected with 🍃𝖒𝖔𝖓𝖌𝖔 + 𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔.`)
);
console.log(error);
process.exit(0);
});
} finally {
console.log(chalk.green("💡𝐈𝐧𝐟𝐨: Connected With 🍃𝖒𝖔𝖓𝖌𝖔 + 𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔."));
}
try {
await sequelize.authenticate();
console.log(chalk.green("💡𝐈𝐧𝐟𝐨: Connected with 🍂𝖘𝖖𝖑 + 🌩️𝖈𝖑𝖔𝖚𝖉𝖉𝖇."));
} catch (error) {
console.error(
chalk.red("❌𝐄𝐫𝐫𝐨𝐫: Unable to Connected with 🍂𝖘𝖖𝖑 + 🌩️𝖈𝖑𝖔𝖚𝖉𝖉𝖇.")
);
console.log(error);
process.exit(0);
}
await sequelize.sync();
let { version } = await Baileys.fetchLatestBaileysVersion();
// let { state, Adapt } = await dbCloudAuth.default();
let { state, Adapt } = await dbAuth();
let ӄӄ = 𝖍𝖆𝖜ӄC({
version,
auth: state,
msgRetryCounterMap,
printQRInTerminal: true,
defaultQueryTimeoutMs: undefined,
logger: pino({ level: `silent` }),
browser: [`Vlkyre`, `Chrome`, `4.0.0`],
getMessage: async (key) => {
return {
conversation: `-null-`,
};
},
});
Ѷ𝖎𝖔𝖓.bind(ӄӄ.ev);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = Baileys.jidDecode(jid) || {};
return (
(decode.user && decode.server && decode.user + `@` + decode.server) ||
jid
);
} else return jid;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.getName = (jid, withoutContact = false) => {
id = ӄӄ.decodeJid(jid);
withoutContact = ӄӄ.withoutContact || withoutContact;
let v;
if (id.endsWith(`@g.us`))
return new Promise(async (resolve) => {
v = Ѷ𝖎𝖔𝖓.contacts[id] || {};
if (!(v.name || v.subject)) v = ӄӄ.groupMetadata(id) || {};
resolve(
v.name ||
v.subject ||
PhoneNumber(`+` + id.replace(`@s.whatsapp.net`, ``)).getNumber(
`international`
)
);
});
else
v =
id === `0@s.whatsapp.net`
? {
id,
name: `WhatsApp`,
}
: id === ӄӄ.decodeJid(ӄӄ.user.id)
? ӄӄ.user
: Ѷ𝖎𝖔𝖓.contacts[id] || {};
return (
(withoutContact ? `` : v.name) ||
v.subject ||
v.verifiedName ||
PhoneNumber(`+` + jid.replace(`@s.whatsapp.net`, ``)).getNumber(
`international`
)
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendContact = async (jid, kon, quoted = ``, opts = {}) => {
let list = [];
for (let i of kon) {
list.push({
displayName: await ӄӄ.getName(i + `@s.whatsapp.net`),
vcard: `BEGIN:VCARD
VERSION:3.0
N:${await ӄӄ.getName(i + `@s.whatsapp.net`)}
FN:${await ӄӄ.getName(i + `@s.whatsapp.net`)}
item1.TEL;waid=${i}:${i}
item1.X-ABLabel:Phone
item2.EMAIL;type=INTERNET:ᴋᴜɴᴀɪbots@gmail.com
item2.X-ABLabel:Email
item3.URL:https://instagram.com/riki_4932
item3.X-ABLabel:Instagram
item4.ADR:;;India;;;;
item4.X-ABLabel:Region
END:VCARD`,
});
}
ӄӄ.sendMessage(
jid,
{
contacts: { displayName: `${list.length} contact`, contacts: list },
...opts,
},
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.public = true;
ӄӄ.serializeM = (Vlkyre) => smsg(ӄӄ, Vlkyre, Ѷ𝖎𝖔𝖓);
ӄӄ.send5ButImg = async (
jid,
text = ``,
footer = ``,
img,
but = [],
options = {}
) => {
let message = await Baileys.prepareWAMessageMedia(
{ image: img },
{ upload: ӄӄ.waUploadToServer }
);
let template = Baileys.generateWAMessageFromContent(
Vlkyre.chatID,
Baileys.proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: footer,
hydratedButtons: but,
},
},
}),
options
);
ӄӄ.relayMessage(jid, template.message, {
messageId: template.key.id,
});
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendButtonText = (
jid,
buttons = [],
text,
footer,
quoted = ``,
options = {}
) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options,
};
ӄӄ.sendMessage(jid, buttonMessage, { quoted, ...options });
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendText = (jid, text, quoted = ``, options) =>
ӄӄ.sendMessage(jid, { text: text, ...options }, { quoted });
ӄӄ.sendImage = async (jid, path, caption = ``, quoted = ``, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄӄ.sendMessage(
jid,
{ image: buffer, caption: caption, ...options },
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendVideo = async (
jid,
path,
caption = ``,
quoted = ``,
gif = false,
options
) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄӄ.sendMessage(
jid,
{ video: buffer, caption: caption, gifPlayback: gif, ...options },
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendAudio = async (jid, path, quoted = ``, ptt = false, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄӄ.sendMessage(
jid,
{ audio: buffer, ptt: ptt, ...options },
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
ӄӄ.sendMessage(
jid,
{
text: text,
contextInfo: {
mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
(v) => v[1] + `@s.whatsapp.net`
),
},
...options,
},
{ quoted }
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}
await ӄӄ.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}
await ӄӄ.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.downloadAndSaveMediaMessage = async (
message,
filename,
attachExtension = true
) => {
let quoted = message.msg ? message.msg : message;
let mime = (message.msg || message).mimetype || ``;
let messageType = message.mtype
? message.mtype.replace(/Message/gi, ``)
: mime.split(`/`)[0];
let stream = await Baileys.downloadContentFromMessage(quoted, messageType);
let buffer = Buffer.from([]);
for await (let chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
let type = await FileType.fromBuffer(buffer);
trueFileName = attachExtension ? filename + `.` + type.ext : filename;
// save to file
await fs.writeFileSync(trueFileName, buffer);
return trueFileName;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ``;
let messageType = message.mtype
? message.mtype.replace(/Message/gi, ``)
: mime.split(`/`)[0];
let stream = await Baileys.downloadContentFromMessage(message, messageType);
let buffer = Buffer.from([]);
for await (let chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.sendMedia = async (
jid,
path,
fileName = ``,
caption = ``,
quoted = ``,
options = {}
) => {
let types = await ӄӄ.getFile(path, true);
let { mime, ext, res, data, filename } = types;
if ((res && res.status !== 200) || file.length <= 65536) {
try {
throw { json: JSON.parse(file.toString()) };
} catch (e) {
if (e.json) throw e.json;
}
}
let type = ``,
mimetype = mime,
pathFile = filename;
if (options.asDocument) type = `document`;
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require(`../Vlkyre🖋️Utilities/exif`);
let media = { mimetype: mime, data };
pathFile = await writeExif(media, {
packname: options.packname ? options.packname : global.packname,
author: options.author ? options.author : global.author,
categories: options.categories ? options.categories : [],
});
await fs.promises.unlink(filename);
type = `sticker`;
mimetype = `image/webp`;
} else if (/image/.test(mime)) type = `image`;
else if (/video/.test(mime)) type = `video`;
else if (/audio/.test(mime)) type = `audio`;
else type = `document`;
await ӄӄ.sendMessage(
jid,
{ [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
{ quoted, ...options }
);
return fs.promises.unlink(pathFile);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.copyNForward = async (
jid,
message,
forceForward = false,
options = {}
) => {
let vtype;
if (options.readViewOnce) {
message.message =
message.message &&
message.message.ephemeralMessage &&
message.message.ephemeralMessage.message
? message.message.ephemeralMessage.message
: message.message || undefined;
vtype = Object.keys(message.message.viewOnceMessage.message)[0];
delete (message.message && message.message.ignore
? message.message.ignore
: message.message || undefined);
delete message.message.viewOnceMessage.message[vtype].viewOnce;
message.message = {
...message.message.viewOnceMessage.message,
};
}
let mtype = Object.keys(message.message)[0];
let content = await Baileys.generateForwardMessageContent(
message,
forceForward
);
let ctype = Object.keys(content)[0];
let context = {};
if (mtype != `conversation`) context = message.message[mtype].contextInfo;
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo,
};
let waMessage = await Baileys.generateWAMessageFromContent(
jid,
content,
options
? {
...content[ctype],
...options,
...(options.contextInfo
? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo,
},
}
: {}),
}
: {}
);
await ӄӄ.relayMessage(jid, waMessage.message, {
messageId: waMessage.key.id,
});
return waMessage;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.cMod = (jid, copy, text = ``, sender = ӄӄ.user.id, options = {}) => {
let mtype = Object.keys(copy.message)[0];
let isEphemeral = mtype === `ephemeralMessage`;
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
}
let msg = isEphemeral
? copy.message.ephemeralMessage.message
: copy.message;
let content = msg[mtype];
if (typeof content === `string`) msg[mtype] = text || content;
else if (content.caption) content.caption = text || content.caption;
else if (content.text) content.text = text || content.text;
if (typeof content !== `string`)
msg[mtype] = {
...content,
...options,
};
if (copy.key.participant)
sender = copy.key.participant = sender || copy.key.participant;
else if (copy.key.participant)
sender = copy.key.participant = sender || copy.key.participant;
if (copy.key.remoteJid.includes(`@s.whatsapp.net`))
sender = sender || copy.key.remoteJid;
else if (copy.key.remoteJid.includes(`@broadcast`))
sender = sender || copy.key.remoteJid;
copy.key.remoteJid = jid;
copy.key.fromMe = sender === ӄӄ.user.id;
return Baileys.proto.WebMessageInfo.fromObject(copy);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.getFile = async (PATH, save) => {
let res;
let data = Buffer.isBuffer(PATH)
? PATH
: /^data:.*?\/.*?;base64,/i.test(PATH)
? Buffer.from(PATH.split`,`[1], `base64`)
: /^https?:\/\//.test(PATH)
? await (res = await getBuffer(PATH))
: fs.existsSync(PATH)
? ((filename = PATH), fs.readFileSync(PATH))
: typeof PATH === `string`
? PATH
: Buffer.alloc(0);
if (!Buffer.isBuffer(data)) throw new TypeError("Result is not a buffer");
let type = (await FileType.fromBuffer(data)) || {
mime: `application/octet-stream`,
ext: `.bin`,
};
filename = path.join(
__filename,
`../src/` + new Date() * 1 + `.` + type.ext
);
if (data && save) fs.promises.writeFile(filename, data);
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data,
};
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
ӄӄ.ev.on("connection.update", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let connection_update = require("../Vlkyre🌗Events/connection_update");
await connection_update.Vcnup(𝖚𝖕𝖉𝖆𝖙𝖊, Ѷ𝖎𝖔𝖓ᴇᴏɴᴇ, ӄӄ);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
ӄӄ.ev.on("creds.update", (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
Adapt(𝖚𝖕𝖉𝖆𝖙𝖊);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
ӄӄ.ev.on("messages.upsert", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let messages_upsert = require("../Vlkyre🌗Events/messages_upsert");
await messages_upsert.Vmsgup(𝖚𝖕𝖉𝖆𝖙𝖊, Ѷ𝖎𝖔𝖓, ӄӄ);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
ӄӄ.ev.on("group-participants.update", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let group_participants = require("../Vlkyre🌗Events/group_participants");
await group_participants.Vgrpns(𝖚𝖕𝖉𝖆𝖙𝖊, ӄӄ);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
ӄӄ.ws.on("CB:call", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let call_updates = require("../Vlkyre🌗Events/call_updates");
await call_updates.Vclup(ӄӄ, 𝖚𝖕𝖉𝖆𝖙𝖊);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
return ӄӄ;
}
Ѷ𝖎𝖔𝖓ᴇᴏɴᴇ().catch((𝕰𝖗𝖗𝖔𝖗) => console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗)));
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)Vlkyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
