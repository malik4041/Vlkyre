const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Welcome = require(`../../Sakura🍃Goose/welcome`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _message_`,
  async handle(ӄʀǟӄɨռʐ, mozart, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    const hold = require(`../../Sakura🛰️Server/Hold`);
    hold.Hold(ֆǟӄʊʀǟ);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (!ֆǟӄʊʀǟ.isGroup) {
      return Sakura_Buttons.MTB(
        ӄʀǟӄɨռʐ,
        mozart,
        ֆǟӄʊʀǟ,
        `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
      );
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (Needs.length === 0) {
      var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
      var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
        𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
      const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
        ӄʀǟӄɨռʐ,
        mozart,
        ֆǟӄʊʀǟ,
        աɦօֆɛռȶɦǟȶ,
        աɦօֆɛռȶɦǟȶռʊʍ,
        ֆǟӄʊʀǟ.commandName,
        ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
      );
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    try {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(ֆǟӄʊʀǟ.chatId);
    } catch {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
    }
    Welcome.findOne(
      {
        ID: ֆǟӄʊʀǟ.chatID,
      },
      async (Error, userWel) => {
        if (Error) console.log(Error);
        if (!userWel) {
          var newServer = new Welcome({
            ServerID: ֆǟӄʊʀǟ.chatID,
            message: Needs.join(" "),
          });
          await newServer
            .save()
            .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
          return Sakura_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            mozart,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🥞 𝐖𝐞𝐥𝐜𝐨𝐦𝐢𝐧𝐠 𝐖𝐢𝐭𝐡
║🍰 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗦𝘁𝗮𝘁𝘂𝘀: _Freshly Added_
║
║${Needs.join(" ")}
╚════════════╝`,
            𝕻𝕻𝖑𝖊𝖙𝖊𝖗
          );
        } else {
          userWel.message = Needs.join(" ");
          await userWel
            .save()
            .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
          return Sakura_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            mozart,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🥞 𝐖𝐞𝐥𝐜𝐨𝐦𝐢𝐧𝐠 𝐖𝐢𝐭𝐡
║🍰 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗦𝘁𝗮𝘁𝘂𝘀: _Updated_
║
║${Needs.join(" ")}
╚════════════╝`,
            𝕻𝕻𝖑𝖊𝖙𝖊𝖗
          );
        }
      }
    );
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
  },
};
