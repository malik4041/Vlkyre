`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let fs = require(`fs`);
let chalk = require(`chalk`);
let ᴀɴɪᴍᴇ = require(`anime-actions`);
let FFmpeg = require(`fluent-ffmpeg`);
let ᴀɴɪᴍᴇ2 = require(`anime-actions`);
let { sleep } = require(`../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let { DownloaderHelper } = require("node-downloader-helper");
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
exports.ᴘᴏᴡᴇʀᴇᴅ = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, ɮօɖʏ) => {
async function CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present) {
let DL = new DownloaderHelper(ꜰɪɴᴀʟʟɪɴᴋ, "./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓", {
fileName: `${Present}.gif`,
retry: true,
});
await DL.on("end", async () => {
await FFmpeg(ɢᴏᴛꜰɪʟᴇ)
.outputOptions([
"-pix_fmt yuv420p",
"-c:v libx264",
"-movflags +faststart",
"-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
])
.save(ɢɪᴠᴇꜰɪʟᴇ)
.on("end", async () => {
await 𝖍𝖆𝖜ӄ
.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
gifPlayback: true,
mentions: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender, Ѷ𝖑𝐤𝐲𝖗𝖊.sender],
caption: `*❣️ ꜰᴏʀ:* @${
Ѷ𝖑𝐤𝐲𝖗𝖊.sender.split(`@`)[0] || ""
}\n*⦓ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ⦔*`,
},
{ quoted: Ѷ𝖑𝐤𝐲𝖗𝖊 }
)
.then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
.catch((𝕰𝖗𝖗𝖔𝖗) => console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗)));
return;
});
});
await DL.on("error", (𝕰𝖗𝖗𝖔𝖗) => {
return console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗));
});
await DL.start().catch((𝕰𝖗𝖗𝖔𝖗) => {
return console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗));
});
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (ɮօɖʏ.includes("bite")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.bite();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.bite();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("blush")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.blush();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.blush();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));

console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("bored")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.bored();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.bored();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("confused")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.confused();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.confused();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("cry")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.cry();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.cry();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("cuddle")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.cuddle();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.cuddle();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("goodnight")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.bite();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.bite();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("happy")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.happy();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.happy();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("hug")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.hug();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.hug();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("kick")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.kick();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.kick();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("kiss")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.kiss();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.kiss();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("muah")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.kiss();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.kiss();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("pat")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.pat();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.pat();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("poke")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.poke();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.poke();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("sad")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.sad();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.sad();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("slap")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.slap();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.slap();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("smile")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.smile();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.smile();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("wave")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.wave();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.wave();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("hi")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.wave();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.wave();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("wink")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.wink();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.wink();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("yes")) {
let ꜰɪɴᴀʟʟɪɴᴋ;
let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.yes();
let Present = `${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}`;
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖑𝐤𝐲𝖗𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID}.mp4`;
if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.yes();
} else {
ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
}
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ꜰɪɴᴀʟʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else {
return;
}
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
