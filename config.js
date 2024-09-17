const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349075857012";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_25_09_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmpsbk1WcGpoTEpzQkxzR3JLaE1QVldLSnZCYVFKc2xHdUl3OUxmc3lkYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDcxNzY4ODUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENUI5RjlGOUNCMTBBOUYyNzJFMjg1QTVBMzcwM0E4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjY1OTM5MjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2RVTmJ5ZjFTWXVvN1NDUkFNU0lVZ1wiLFxuICBcInBob25lSWRcIjogXCI3ODA2ZjQzMC1mZGQ1LTRiMDMtODdmYy01NzNjOTdkNGU4YzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMzIsXG4gICAgICA2MixcbiAgICAgIDEwMixcbiAgICAgIDE1MixcbiAgICAgIDE4NixcbiAgICAgIDE2NyxcbiAgICAgIDE0NSxcbiAgICAgIDIxOCxcbiAgICAgIDE3MixcbiAgICAgIDE0MSxcbiAgICAgIDEzLFxuICAgICAgMjM4LFxuICAgICAgMjQzLFxuICAgICAgMTAsXG4gICAgICAxODEsXG4gICAgICAxMDgsXG4gICAgICA0NCxcbiAgICAgIDgxLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDE1OCxcbiAgICAgIDEzMixcbiAgICAgIDE4NyxcbiAgICAgIDEzMSxcbiAgICAgIDQ2LFxuICAgICAgMjQ4LFxuICAgICAgMTc2LFxuICAgICAgMTE0LFxuICAgICAgMTA4LFxuICAgICAgMTI1LFxuICAgICAgMjA1LFxuICAgICAgMjcsXG4gICAgICAxNjksXG4gICAgICAxMjcsXG4gICAgICAxODYsXG4gICAgICAxMTQsXG4gICAgICAxMDYsXG4gICAgICAxMjEsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWNVM0NUxBSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MTc2ODg1MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVWx0aW1hdGUgVWxjZXIgU29sdXRpb25cIixcbiAgICBcImxpZFwiOiBcIjIxNzYwNTAyMTQwOTMxNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6VDE2b0VFUHIycHJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSEVIT0E3WUsxRnNUNXpwSkFraEhMNnVBYlVHVGxxU2NGSG9NdUVtcHRnND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnL0VxMGUzMmJsVktZeXhxcUhYQU1HQnpHRlJMbWlCMmo0NXdCMWN0YkZlUmJmUGJWSUxRQm1jNXBQS3FKZnpVVVM3cTNkUUQrUHNWWGkydFZtMDdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnQ1BxRTFxUTZUZDJqMEY5VnV4Rjh1azdkdHcwOGJPbWM5VFJULzJ1Qm5adzRoUmt4UGswT1d3aTVDdTdDa3MrY290amYySW1nWCtyclNtL0Q5RHJodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxNzY4ODUwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjU5MzkxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9Sc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1JzLmpzb24iOiAie1wia2V5RGF0YVwiOlwibEFrOGZ4MFdkMlF3VGtBcnpTR0VTRVNtejJQQjd3ai81WFFoS0F3a01DQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTYzMjU4MjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY1OTM5MjQ3NDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


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
