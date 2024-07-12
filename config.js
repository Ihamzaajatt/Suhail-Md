const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itxhamza42@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923327421134";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_11_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjWlZJeHhKdnFnTjFmZUxEZ0VUNXBrQ2ZPYngrWFhQMGpQUW8yRGtZb0FNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlbXgyblRGWVFFMnk0RU92ckFDUzhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNiYTZiMTJlLWVjMjgtNDBiNi1hYjk2LTBlNjc1MTE5NWY2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDU3LFxuICAgICAgMTM2LFxuICAgICAgMTQ0LFxuICAgICAgMzEsXG4gICAgICAyMDgsXG4gICAgICA4MCxcbiAgICAgIDExNixcbiAgICAgIDIzMyxcbiAgICAgIDQ0LFxuICAgICAgOTQsXG4gICAgICAyMjAsXG4gICAgICA0LFxuICAgICAgMjA5LFxuICAgICAgNzEsXG4gICAgICAyMTgsXG4gICAgICAzNixcbiAgICAgIDE4OSxcbiAgICAgIDI0MCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICA2OSxcbiAgICAgIDIyOSxcbiAgICAgIDE2NSxcbiAgICAgIDIxMSxcbiAgICAgIDIzNixcbiAgICAgIDE2OSxcbiAgICAgIDEzNCxcbiAgICAgIDE3NyxcbiAgICAgIDE0NyxcbiAgICAgIDEzMCxcbiAgICAgIDIyNyxcbiAgICAgIDIyOSxcbiAgICAgIDE1NixcbiAgICAgIDI0MSxcbiAgICAgIDE3MyxcbiAgICAgIDE1MyxcbiAgICAgIDExLFxuICAgICAgMjI4LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEEzWlNGTUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMyNzQyMTEzNDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxNDcxOTkxMTUzMzg6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJpdGNNSEVOREh4YlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwbVhuVUNsaUJIdDJtYjlkazRVaGF2VEZHdFNwRHVlTGIyTVhNZThYeER3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIksrRGhLQ2hic1YzUmpxWVBnTUtLYzB5Zzg2dWpoem9udCtmbVFzRmJ2MnZFazZ1SHZrRncrK3NMWHNOc3hUMXFoZ2hkSnU3ZlRrcmRrZ1N2OHFLVkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhTOWpQR0NybGY3aDBmVXBtNTczLzhYZ3Y2b0N3RXczWVBMa3djUnVva3N1R21ldWowdUNFNmFRNmZXR0ZlL2FDVFE2NEswMGk4SXlWYnNXUmw0U2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMyNzQyMTEzNDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MDQzMDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᦔ𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭𓆩🐼⃝❤️𓆪",
  packname: process.env.PACK_NAME || "ᦔ𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭𓆩🐼⃝❤️𓆪",
  botname : process.env.BOT_NAME  || "ᦔ𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭𓆩🐼⃝❤️𓆪",
  ownername:process.env.OWNER_NAME|| "ᦔ𝐇𝐚𝐦𝐳𝐚_𝐉𝐮𝐭𝐭𓆩🐼⃝❤️𓆪",


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
