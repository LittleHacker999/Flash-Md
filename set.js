const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1Dem1IK3NaRjUrNXFOc0ZKcUZCZWJGVElPekh3ZFYvK3VSZHhnSndGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXl0Z3FXeEYvMXlONUNYY3o3cno2eUcvbUpJSURqMjJIVnN1KzRUMEdnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQkYrdnlxV1lWbGVzczhzM0ZxSnpLTjlTcHp3MzJhMklKQVNxSjJQWmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTDcyVHVOaEFpQnlKVFUzVXpmU3VPVklIaHFDNHJqaWduM002NWJZMzE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKdWhvcUNMQVJXMVlIQksxakdqTG1JU2Q1TUhtZHM1S3dzdVBzM3oxVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxyY3RuUW5uaERXNkp6M2k1TXZQdzFCbU80Z1poN3JpQzVJTDI3eTFuMFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZnWldyNlNXdWF3Z2lONEJ0Z0cyNkRtRXZORjRGR1ZmcHllOEJTSlZudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3pnOUdFZmtuWnpTOWswMi9jajk0WC9ta0NsVk9mR0dvcGVGcmRXT3RnST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxiN2ExV0JKZGJyZGxPdmZYbGJHRkswK0VzSGsvMzBuZkxKa1lZRy9IZVgvR1hhWnBEaWZ4L01pT3ZMUUtFMGM3eXl0Q2FjNWYrczZCQndUTDdVMWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJWdXp6V1RNUytubjVEcjR6aTVRM0JCZjdJMStmdDdNejZYTlArajlNaEtRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg2ODc0NzQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdDMkJFQzFBQzY5RjMxREE4NzU5RjU0MDZGREJDQkNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxOTc2MjR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg2ODc0NzQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU4QTM1N0Q0RDUxODQ3RjYxNUU3M0FCQTFBRUIzN0JGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxOTc2MjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjM2X0ladkxzVDAyRVFkVzdRNTN5WkEiLCJwaG9uZUlkIjoiMzY2ODIxYTUtZWY3ZC00MjgzLWE4YjktZTdlNzUwOGMwZTM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlorUSthWkJZYjArM3N4d2dMQ1BROHJxYzU1ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4RHRjQ21OV0hxWERlTlBabTYxT1V4UmRIc2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ01BM0FYQUIiLCJtZSI6eyJpZCI6Ijk0Nzg2ODc0NzQxOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl6fwnZeb8J2XmCDwnZerIPCdl5XwnZei8J2XpyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0hWZ3JFRUVPakRvTFFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMWxXQVlqNHR1Yzhsb0JLVUcvL3JYRldkUkNTcFhTQXJJamM2ZnJDWlpFcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTzZ6WTgydTFpKzQySXlSYldOamxrWE9FZDkwOW5xdFNjblMrbXpVWklTbnNCcW5EeVBRby9iakowQ3owUENEMk1hUm4xSm1oV1VjYldINjllM1RtQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjU3NzBOY0RnVFhJRkQ3aFhidm9BV3FJSHRKMFRZLy9sRnB0cndhUTB0eW9KZVMwSDJ1UTEyN08wZjQ4TzRLOFFrN09zSXF6MXRpTVNleVlLakgrSWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODY4NzQ3NDE6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFpWZ0dJK0xiblBKYUFTbEJ2LzYxeFZuVVFrcVYwZ0t5STNPbjZ3bVdSTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDE5NzYyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQd3kifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᐇ 𝗝ͨ͋͋͋͋𝗜𝗧𝗛𝗨⃞𝗟𝗔 𝗕̞̞̞̞̞̞̞̞̞𝗛͢𝗔͒͒͒͒𝗦𝗜ͯ𝗧ͭ𝗛ͫ𝗔͚͚͚͚ ッ",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "94770463141", 
             
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "on",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
CHATBOT: process.env.CHAT_BOT || "on",
    AUTO_SAVE_STATUS: process.env.AUTO_SAVE_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'THE-X-Bot',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/QJd9076/Beige-Black-Bold-Minimalist-Brand-Signature-Logo.png',
    MODE: process.env.BOT_MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_MESSAGE || "on",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'off',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
