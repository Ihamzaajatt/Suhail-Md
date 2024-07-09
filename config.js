const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itxhamzaa43@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭⁩" 


global.devs = "+923327421134" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923327421134";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_51_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJqNGcxcXdiSTc4bjJCWVpSb2sxOFB0NDUyZjJhQVdxNzR3STkxQkcwMkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1KWEk4cFBVU3pDX1VzbE1QM3BXZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGI1ZTkzYTgtYjM4ZC00MWUxLThlMzgtNjdlYTcyNzY0MDMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDg0LFxuICAgICAgMjA2LFxuICAgICAgMTM4LFxuICAgICAgMTA4LFxuICAgICAgMTQyLFxuICAgICAgMTU3LFxuICAgICAgMjA0LFxuICAgICAgOTksXG4gICAgICAzNyxcbiAgICAgIDIyMixcbiAgICAgIDU2LFxuICAgICAgMTU0LFxuICAgICAgMTYxLFxuICAgICAgMTk3LFxuICAgICAgOTEsXG4gICAgICAxODYsXG4gICAgICA2OCxcbiAgICAgIDE3NCxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDQzLFxuICAgICAgNzgsXG4gICAgICAyNTAsXG4gICAgICAxMDksXG4gICAgICAzLFxuICAgICAgMjAsXG4gICAgICAxNCxcbiAgICAgIDIxLFxuICAgICAgMTIxLFxuICAgICAgMTQyLFxuICAgICAgMTc1LFxuICAgICAgMTMwLFxuICAgICAgMzAsXG4gICAgICAyNTEsXG4gICAgICAyMzcsXG4gICAgICA5OSxcbiAgICAgIDUzLFxuICAgICAgMTQzLFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhUR01aM1BBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMjc0MjExMzQ6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTQ3MTk5MTE1MzM4OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyaXRjTUhFSmJxc0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicG1YblVDbGlCSHQybWI5ZGs0VWhhdlRGR3RTcER1ZUxiMk1YTWU4WHhEdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxYVlvSkpET0tydzNUMTBGd0lDZWQ1VFRnejF3bDJlYmwzN1hJYUJXc2FLNGNhOVZ1RDlLYkFndUljRS9IODdYbnFzQlA0SkZVcldockQ1SHdzdmJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLWEx4T3dwM3k5OTliSEF2aXRtME8zdVIyaVoxQzRObUhIVm14a2hYQ0t3UkZUR0xydldtZlVWMnZwVStYOWhVTWdDRUR3NHh2d0RSbXJIR0Vsem1CZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMjc0MjExMzQ6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY0NjY2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 "𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭 』```", //*『HAMZA JUTT』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭",
  ownername:process.env.OWNER_NAME|| "𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭⁩",


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
