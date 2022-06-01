let fs = require('fs')
global.DeveloperMode = 'false' //true atau false, true berati iya false berati tidak Moga paham
global.owner = ['601111829561'] // masuk in no lu sebagai owner
global.mods = ['601111829561'] // masuk in no moderator ny
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // ini buat premium
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // Apikey lu di sini
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ'
  'https://nxlynhapikey.herokuapp.com/' : 'nxlynh'
}

// Sticker Watermark
global.packname = '-'
global.author = '-'

global.multiplier = 36 // ini butuh berapa xp buat levelup 

global.wait = '*WAIT...⏳*'
global.error = '*ERROR BANH MAAP😔☝️*'
global.botwm = '⸝⸝ʜɪɴᴀᴛᴀʙᴏᴛᴢ❋ཻུ۪۪⸙' // watermark bot
global.oname = 'ᴎꭗʟ𝚈ɴᴴ' // nama owner nya
global.thum = 'https://telegra.ph/file/5859353a380d9b67be198.jpg'

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
