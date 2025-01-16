/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
*╭┉┉┉┉┅┅┅═══════┈┈┈┉┉┉┉*
*╏▸* *ʙᴏᴛ ɴᴀᴍᴇ* : *ᴍᴀʟᴠɪɴ xᴍᴅ*
*╏▸* *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ᴍᴀʟᴠɪɴ ᴋ (🇿🇼)*
*╏▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*╏▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*╏▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*╏▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*
  🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀
*╭──┄┄┄┄┄┄┄┄┄┄────*
*┋☞ ➊ • ᴏᴡɴᴇʀ*
*┋☞ ➋ • ᴄᴏɴᴠᴇʀᴛ*
*┋☞ ➌ • ᴀɪ*
*┋☞ ➍ • sᴇᴀʀᴄʜ*
*┋☞ ➎ • ᴅᴏᴡɴʟᴏᴀᴅ*
*┋☞ ➏ • ᴍᴀɪɴ*
*┋☞ ➐ • ɢʀᴏᴜᴘ*
*┋☞ ➑ • ғᴜɴ*
*┋☞ ➒ • ᴏᴛʜᴇʀ*
*╿☞ ➓ • ᴛᴏᴏʟs*
*╰━━┉┉┉━━┉┉━┉┅┅┅┅┅┅*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

> ${config.DESCRIPTION}`;

        const vv = await conn.sendMessage(
            from,
            {
                image: { url:config.MENU_IMG},
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Mʀ-ᴍᴀʟᴠɪɴ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*꧁◈╾ 𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃╼◈꧂*

╭───────────────
┋⚉ *.ᴏᴡɴᴇʀ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ *ᴘᴀɪʀ 263xxx*
┋⚉ *ᴘᴀɪʀ2 263xxx*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴍᴀʟᴠɪɴ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 12*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '2':               
                        repl (`꧁◈╾ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂

╭─────────────
┋ ☻ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ *ss* 
┋ ☻ *ᴛʀᴛ*
┋ ☻ *ᴛᴛs*
┋ ☻ *ᴠᴠ*
┋ ☻ *ғᴀɴᴄʏ*
┋ ☻ *sᴛɪᴄᴋᴇʀ*
┋ ☻ *ʟᴏɢᴏ*
┋ ☻ *ʟᴏɢᴏ1*
┋ ☻ *ʟᴏɢᴏ2*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 10*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '3':               
                        reply(`꧁◈╾ 𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭─────────────
┋ ☻ *ᴀɪ* 
┋ ☻ *ɢᴘᴛ*
┋ ☻ *ᴍᴀʟᴠɪɴ*
┋ ☻ *ɢᴇᴍɪɴɪ*
┋ ☻ *ɢᴘᴛ3*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 5*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '4':               
                        reply(`*꧁◈╾ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭──────── ────
┋ ◉ *.ᴘʟᴀʏ* 
┋ ◉ *.ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┋ ◉ *ʟʏʀɪᴄs*
┋ ◉ *ɢᴏᴏɢʟᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 7*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '5':               
                        reply(`*꧁◈ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭─────────────
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ *sᴘᴏᴛɪғʏ*
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ2*
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛᴛ/ ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ɪᴍɢ* 
┋ ☻ *ʙᴀɪsᴄᴏᴘᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 16*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '6':               
                        reply(`*꧁◈╾ 𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭─────────────
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ *ʟɪsᴛ*
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
┋ ◕ *ɪɴғᴏ*
┋ ◕ *ᴀʙᴏᴜᴛ*
┋ ◕ *ᴛɪɴʏᴜʀʟ*
┋ ◕ *ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ *ϙʀᴄᴏᴅᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 14*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '7':               
                        reply(`*꧁◈╾ 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭────────────
┋ ☛ *ᴘʀɪᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇʟᴇᴛᴇ*
┋ ☛ *ᴋɪᴄᴋ* 
┋ ☛ *ᴋɪᴄᴋᴀʟʟ*
┋ ☛ *ᴀᴅᴅ* 
┋ ☛ *ᴀᴅᴍɪɴs* 
┋ ☛ *ɢᴇᴛᴘɪᴄ* 
┋ ☛ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ *ᴘᴏʟʟ*
┋ ☛ *ɢɴᴀᴍᴇ* 
┋ ☛ *ᴛᴀɢᴀʟʟ* 
┋ ☛ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ *ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ *ɢɪɴғᴏ* 
┋ ☛ *ɢʟɪɴᴋ*
┋ ☛ *ᴜɴʟᴏᴄᴋ*
┋ ☛ *ʟᴏᴄᴋ*
┋ ☛ *ᴍᴜᴛᴇ*
┋ ☛ *ᴜɴᴍᴜᴛᴇ*
┋ ☛ *ɢᴅᴇsᴄ*
┋ ☛ *sᴇᴛsᴜʙᴊᴇᴄᴛ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 22*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                       break;
                    case '8':               
                        reply(`*꧁◈╾ 𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭────────────
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴀᴡᴏᴏ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 8*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                       break;
                    case '9':               
                        repl (`◀◈╾ 𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢꜱᴛᴀʟᴋ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *ᴅᴇғɪɴᴇ*
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
┋ ☻ *ϙᴜᴏᴛᴇ*
┋ ☻ *sᴛᴀᴛᴜs*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

⭓*ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 10*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
                        break;
                    case '10':               
                        reply(`*꧁◈╾ 𝚃𝙾𝙾𝙻𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭────────────
┋ ☻ *.ᴋɪss*
┋ ☻ *.ʜᴀɴᴅ*
┋ ☻ *.ʜᴀᴘᴘʏ*
┋ ☻ *.ʜᴇᴀʀᴛ*
┋ ☻ *.ᴀɴɢᴇʀ*
┋ ☻ *.sᴀᴅ*
┋ ☻ *.sʜʏ*
┋ ☻ *.ᴍᴏᴏɴ*
┋ ☻ *.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ *.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

⭓*ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 10*

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
