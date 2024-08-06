const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_55_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgODksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVm5aeXZ1ZjNlM1VQZFhBOVJiZFdGV0R1K0RMM3ZOWWJuQlRCT2hwZHZrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNjcyNjk5MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzNEI3QjNBQUYxQTBCNkJFMjA3MEI2M0M1QTNCRjc1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk0NTMzN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkeWNNdzVXQ1QwcWh3NGlpME9mbGp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM5Y2I3YWQ1LTVjZjYtNDgyYS1hMGQ0LWE3MWQ1ZmM0Mzk5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDI0NyxcbiAgICAgIDE4MCxcbiAgICAgIDU3LFxuICAgICAgMTkxLFxuICAgICAgMTM1LFxuICAgICAgMTkwLFxuICAgICAgMTI5LFxuICAgICAgMjEyLFxuICAgICAgMTM4LFxuICAgICAgMTM1LFxuICAgICAgMTE5LFxuICAgICAgMjQwLFxuICAgICAgODMsXG4gICAgICAxNDMsXG4gICAgICAxMjYsXG4gICAgICA3NSxcbiAgICAgIDE0NCxcbiAgICAgIDE1MSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDc3LFxuICAgICAgMTEsXG4gICAgICAxMixcbiAgICAgIDAsXG4gICAgICAxMjgsXG4gICAgICA5MixcbiAgICAgIDMyLFxuICAgICAgMTYzLFxuICAgICAgMTEyLFxuICAgICAgMjE1LFxuICAgICAgMTA0LFxuICAgICAgNDcsXG4gICAgICAyNDMsXG4gICAgICAxMjIsXG4gICAgICAxOTgsXG4gICAgICAxOTgsXG4gICAgICAxNDYsXG4gICAgICA3NixcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDM0QxNFhZSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzY3MjY5OTE0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQYWdhbCBrdWRpXCIsXG4gICAgXCJsaWRcIjogXCIxNzAxNDk5MTA5NjYzMzg6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLK3V0SkVHRUxHZXlMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBSM2NUQ0s5ems2Y29yVmdRcDZzaUlLTG5VWklvYjIvTTdVQ1VEc3lCVjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1FTam9hcW0rSGREOU44V2wxVHk2ckprWks5Z2xOQnhNT3JvU0xjVzlZeS9WMCtVRzZucFBKREhWdE9yQ055bkVNOHBNSXZFU21aSk9HZ1YvZGgwQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV3FEMFA5WUdxZXRDSWV0UkFPeFRBRmhaUXRQWGhFY0w4czRTcGxJUnhWcHM5ZHJWNFA2NWxkdVpib3UrbUdhcDkyRDhBQmVBTXFERENKMnBVTUVDQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzY3MjY5OTE0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NDUzMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIdTNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh1My5qc29uIjogIntcImtleURhdGFcIjpcInhWcjRpRGsyaXZjTjl1U2ZsVDhWblhmRmE4VTNTV3B4QklXOWZzS09OVEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0NzEyMjIyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
