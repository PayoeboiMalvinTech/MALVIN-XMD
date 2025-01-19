/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "intro",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : ᴍʀ ᴍᴀʟᴠɪɴ
 ◈ •│
 ◈ •│ Place      : ᴢɪᴍʙᴀʙᴡᴇ
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : ᴜɴʟɪᴍɪᴛᴇᴅ
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/263714757857
 ◈ •│
 ◈ •│ IG ID      : undefined 
 ◈ •│
 ◈ •│ Connect   : undefined 
 ◈ •│
 ◈ •│ Github     : kingmalvin
 ◈ •│
 ◈ •│ Website    :undefined 
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • MALVIN XMD - TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠ᴍʀ ᴍᴀʟᴠɪɴ*
 ◈ •*│  ◦* *▢➠ᴛᴋᴛ ᴏғғɪsʜᴀʟ*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*╰┈───────────────•*
 
 ◈ •*•────────────•⟢*
> © ᴊᴏɪɴ ᴏᴜʀ ᴡᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7pg2gp.jpg` },
                caption: about,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🪀『 𝙼𝙰𝙻𝚅𝙸𝙽-𝚇𝙼𝙳 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Media/menu.mp3
        await conn.sendMessage(from, { //https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Media/menu.mp3
            audio: { url: 'https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Media/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

