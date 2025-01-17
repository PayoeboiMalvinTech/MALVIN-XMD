
const config = require('../config');
const fs = require('fs');
const { execSync } = require('child_process');
const { cmd } = require('../command');

cmd({
  pattern: "update",
  react: "⚙",
  desc: "Update bot",
  category: "system",
  use: '.update',
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    await conn.sendMessage(from, { text: 'Please wait... Updating bot...' }, { quoted: mek });

    const repoUrl = `https://github.com/kingmalvn/MALVIN-XMD`;

    console.log("Updating repository using rsync...");
    execSync(`rsync -avz --delete --exclude=.git ${repoUrl}/ ./`);

    await conn.sendMessage(from, { text: '*✅ 𝙼𝙰𝙻𝚅𝙸𝙽 𝚇𝙼𝙳 𝚄𝙿𝙳𝙰𝚃𝙴𝙳 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝚈!*' }, { quoted: mek });
  } catch (error) {
    console.error(error);
    reply(`*Error during update:* ${error.message}`);
  }
});
