
//TECHNO CODE
const Discord = require('discord.js');//techno
const client = new Discord.Client();//techno
const ayarlar = require('./techno.json');//techno
const chalk = require('chalk');//techno
const fs = require('fs');//techno
const moment = require('moment');//techno
const db = require('quick.db')//techno
const Jimp = require('jimp');//techno
const snekfetch = require('snekfetch');//techno
require('./util/eventLoader')(client);//techno
const cnf = require('./techno.json');//techno
let sahip = cnf.sahip;//techno
var prefix = cnf.prefix;//techno
var request = require('request');//techno
var apikey = cnf.apikey;//techno
var ip = cnf.ip;//techno
let isim = cnf.sunucuisim;//techno
const http = require('http');//techno
const express = require('express');//techno
const app = express();//techno
app.get("/", (request, response) => {//techno
      console.log(`az önce panelime biri techno sever tıkladı!`);//techno
  response.sendStatus(200);//techno
});//techno//techno
 var tc = "techno code" //techno
app.listen(process.env.PORT);//techno
setInterval(() => {//techno
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);//techno
}, 280000);//techno

client.on('ready', async () => {//techno
  var url = `https://mcapi.xdefcon.com/server/${ip}/full/json`;//techno
   request(url, function (err, response, body) {//techno
    body = JSON.parse(body);//techno
   client.appInfo = client.fetchApplication();//techno
  setInterval( async () => {//techno
    client.appInfo = await client.fetchApplication();//techno
  }, 1000);  //techno
  client.user.setActivity(`Çevrimiçi: ${body.cevrimici}/${body.maxcevrimici} Ping: ${body.ping} `, { type:"PLAYING" })//techno
  });//techno
setTimeout(() => {//techno
console.log(`Verileri güncelliyorum...`);     //techno
process.exit(0);//techno
}, 5000)//techno
const log = message => {//techno
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message} ${tc}`);//techno
};//techno
client.elevation = message => {//techno
  if(!message.guild) {//techno
	return; }//techno
  let permlvl = 0;//techno
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;//techno
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;//techno
  if (message.author.id === sahip) permlvl = 4;//techno
  return permlvl;//techno
};//techno
});//techno
const log = message => {//techno
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);//techno
};//techno
var tch = `https://mcapi.xdefcon.com/server/${ip}/full/json`;//techno
   request(tch, function (err, response, body) {//techno
    body = JSON.parse(body);//techno
client.on("message", async message => {  //techno

 if (message.content.startsWith(prefix + "sunucudurum")) {//techno
    const tchembed = new Discord.RichEmbed()//techno
    .setTitle(`${isim} MC SUNUCU DURUMU`)//techno
  .setDescription(`
\`oyuncu sayısı\` :: **${body.cevrimici}**/**${body.maxcevrimici}**
\`ping\`          :: **${body.ping}**
\`sürüm\`         :: **${body.surum}**

\`sunucu ip\`     :: **${ip}**
`)//techno
message.channel.send(tchembed);//techno
 }//techno
})//techno
const request = require('request')//techno
setInterval(async () => {//techno
var tch = `https://mcapi.xdefcon.com/server/${ip}/full/json`//techno
request(tch, function (err, response, body) {//techno
if (err) {//techno
console.log(err);//techno
console.log('Sunucu bilgilerini alırken hata oluştu!')//techno
}//techno

body = JSON.parse(body);//techno
client.channels.get('SESLİ KANALIN İDSİ').setName(`İP : ${ip}`)//techno
client.channels.get('SESLİ KANALIN İDSİ').setName(`Ping : ${body.ping}`)//techno
client.channels.get('SESLİ KANALIN İDSI').setName(`Çevrim İçi : ${body.players}/${body.maxplayers}`)//techno
})//techno
},10000)   //techno  
          
   })//techno



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;//techno

client.on('warn', e => {//techno
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));//techno
});//techno
//techno
client.on('error', e => {//techno
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));//techno
  
  });//techno



client.login(cnf.token);//techno
//techno code sunucusuna aittir! lütfen kendi sunucunuzda paylaşıp ben yaptım falan demeyin! Bu altyapı lisanslıdır çalınması durumunda dava açma hakkına sahibim!
