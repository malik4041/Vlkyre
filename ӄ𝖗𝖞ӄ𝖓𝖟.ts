`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
process.env.YTDL_NO_UPDATE = "0";
process.env.SPDL_NO_UPDATE = "0";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
import makeWASocket, {
DisconnectReason,
makeInMemoryStore,
WASocket,
} from "@adiwajshing/baileys";
import fs from "fs";
import Kolor from "chalk";
import { join } from "path";
import Vmangos from "mongoose";
import Pot, { Logger } from "pino";
import ʟᴀʏᴏᴜᴛ from "./𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import { Sequelize } from "sequelize/types";
const chalkAnimation = require("chalkercli");
import Command from "./𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/command";
import useRemoteFileAuthState from "./𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/dbAuth";
import messages_upsert from "./𝐀𝐫𝐜𝐭𝐢𝐱💥𝐄𝐯𝐞𝐧𝐭𝐬/messages_upsert";
import connection_update from "./𝐀𝐫𝐜𝐭𝐢𝐱💥𝐄𝐯𝐞𝐧𝐭𝐬/connection_update";
import participants_update from "./𝐀𝐫𝐜𝐭𝐢𝐱💥𝐄𝐯𝐞𝐧𝐭𝐬/participants_update";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const sequelize: Sequelize = ʟᴀʏᴏᴜᴛ.DATABASE;
const logger: Logger = Pot({
timestamp: () => `,"Time":"${new Date().toJSON()}"`,
}).child({});
logger.level = "error";
const store = makeInMemoryStore({ logger });
store?.readFromFile("./AʀƈȶɨӼ.json");
setInterval(() => {
store?.writeToFile("./AʀƈȶɨӼ.json");
}, 10_000);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
(async (): Promise<void> => {
console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨: Trying To Connect To '🍃mongo + 🕸️sql'"));
try {
await sequelize.authenticate();
console.log(Kolor.green("💡𝐈𝐧𝐟𝐨: Connected with 🕸️SQL."));
} catch (error) {
console.error(Kolor.red("❌𝐄𝐫𝐫𝐨𝐫: Unable to Connected with 🕸️SQL"));
console.log(error);
process.exit(0);
}
await sequelize.sync();
try {
await Vmangos.connect(ʟᴀʏᴏᴜᴛ.VMango, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
}).catch((error) => {
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${error}`));
process.exit(0);
});
} finally {
console.log(Kolor.green("💡𝐈𝐧𝐟𝐨: Connected with 🍃MONGO."));
}
console.log(
Kolor.green("💡𝐈𝐧𝐟𝐨: Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 connected to servers and verified...")
);
chalkAnimation.rainbow(
" (𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! "
);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
let commandHandler: Map<string, Command> = new Map();
let Folders: string[] = fs.readdirSync(join(__dirname, "𝐀𝐫𝐜𝐭𝐢𝐱💖𝐇𝐞𝐚𝐫𝐭"));
for (const Files of Folders) {
const AllFiles = fs
.readdirSync(join(__dirname, `./𝐀𝐫𝐜𝐭𝐢𝐱💖𝐇𝐞𝐚𝐫𝐭/${Files}`))
.filter((File) => File.endsWith(`.js`));
for (const File of AllFiles) {
const command = require(`./𝐀𝐫𝐜𝐭𝐢𝐱💖𝐇𝐞𝐚𝐫𝐭/${Files}/${File}`);
try {
commandHandler.set(command.name, command);
console.log(Kolor.green(Files + " :") + Kolor.blue(File + " ✔️"));
} catch (error) {
console.log(
Kolor.red("❌𝐄𝐫𝐫𝐨𝐫: " + error + " | ") +
Kolor.green(Files + " :") +
Kolor.blue(File)
);
continue;
}
}
}
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const { state, saveCreds } = await useRemoteFileAuthState(logger);
const startSock = async () => {
const ӄ𝖗𝖞ӄ𝖓𝖟: WASocket = makeWASocket({
logger,
printQRInTerminal: true,
auth: state,
browser: ["Arctix Api", "Chrome", "4.0.0"],
getMessage: async (key) => {
return {};
},
});
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
store?.bind(ӄ𝖗𝖞ӄ𝖓𝖟.ev);
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("group-participants.update", async (update) => {
participants_update.participants_update(update, ӄ𝖗𝖞ӄ𝖓𝖟);
});
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("connection.update", (update) => {
connection_update.connection_update(update, DisconnectReason, startSock);
});
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("messages.upsert", async (update) => {
messages_upsert.messages_upsert(update, ӄ𝖗𝖞ӄ𝖓𝖟, commandHandler);
});
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("creds.update", (creds) => {
saveCreds(creds);
});
return ӄ𝖗𝖞ӄ𝖓𝖟;
};
startSock();
})().catch((error) => console.log("[MAINERROR] : %s", Kolor.red(error)));
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
