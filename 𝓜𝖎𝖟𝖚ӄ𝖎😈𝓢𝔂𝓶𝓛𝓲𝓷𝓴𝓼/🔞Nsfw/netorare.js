// ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const Downloader = require(`nodejs-file-downloader`);
const akaneko = require(`akaneko`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
var moon = [
  "ass",
  "bsdm",
  "blowjob",
  "cum",
  "doujin",
  "feet",
  "femdom",
  "foxgirl",
  "glasses",
  "hentai",
  "maid",
  "masturbation",
  "netorare",
  "orgy",
  "panties",
  "pussy",
  "school",
  "tentacles",
  "thighs",
  "uniform",
  "yuri",
];
const moonshine = moon[Math.floor(Math.random() * moon.length)];
// ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
module.exports = {
  name: `netorare`,
  description: `ᴡᴏᴡ, ɪ ᴡᴏɴ'ᴛ ᴇᴠᴇɴ Qᴜᴇꜱᴛɪᴏɴ ʏᴏᴜʀ ꜰᴇᴛɪꜱʜᴇꜱ`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    // ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
      let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎MemErr.png`);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        content,
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
        footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      return await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      // ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
    } else {
      const link = await akaneko.nsfw.netorare();
      console.log(link);
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `netorare_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/netorare_${ꜱᴇɴᴅᴇʀɪᴅ}.png`);
        console.log(content);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.image,
          { mimetype: Mimetype.png }
        );
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `
┌────⭓ 🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+
│⦿ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} 
│⦿ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${link}`,
              footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}${moonshine}`,
                  buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
                  type: 1,
                },
              ],
              headerType: 4,
              imageMessage: media.message.imageMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender] },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } catch (ℓαвєяяσя) {
        ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
    }
  },
};
// ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
