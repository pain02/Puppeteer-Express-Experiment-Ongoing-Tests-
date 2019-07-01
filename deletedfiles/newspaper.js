const puppeteer = require('puppeteer');

  const Discord = require('discord.js');
  const bot = new Discord.Client();

  bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}.`);
    bot.user.setStatus('visible')
  });


function function1 () {

(async () => {
  const browser = await puppeteer.launch({
  headless: false
   })

const page = await browser.newPage()

//await page.goto('https://mafiamatrix.com/js/population_json.asp');
//await page.goto('https://mafiamatrix.com/js/population_json.asp');
await page.goto('https://mafiamatrix.com/js/population_json.asp');
await page.waitFor(6000);
const title = await page.$x("/html/body/text()");
let text = await page.evaluate(h1 => h1.textContent, title[0]);
//var array = text.split("city");
//console.log(array);

var contact = JSON.parse(text);
console.log(contact)

//AK
console.log(contact.cities[0].city);
console.log(contact.cities[0].count);
console.log(contact.cities[0].status);
//HK
console.log(contact.cities[1].city);
console.log(contact.cities[1].count);
console.log(contact.cities[1].status);
//LD
console.log(contact.cities[2].city);
console.log(contact.cities[2].count);
console.log(contact.cities[2].status);

//NY
console.log(contact.cities[3].city);
console.log(contact.cities[3].count);
console.log(contact.cities[3].status);

//}

global.nycount = contact.cities[3].count;
global.nystatus = contact.cities[3].status;
global.ldcount = contact.cities[2].count;
global.ldstatus = contact.cities[2].status;

global.hkcount = contact.cities[1].count;
global.hkstatus = contact.cities[1].status;

global.akcount = contact.cities[0].count;
global.akstatus = contact.cities[0].status;

global.totalpop = parseFloat(akcount) + parseFloat(ldcount) + parseFloat(nycount) + parseFloat(hkcount);

console.log(totalpop);

await browser.close();
})();
}
function function2 () {
bot.on('message', message=>{
  if (message.content.startsWith("!memes")) {
let embed = new Discord.RichEmbed()
.setAuthor("MafiaMatrix Help","https://cdn.discordapp.com/attachments/529749288687763494/546830811970797600/mm2.jpg")
.addField("Game Statistics - ","**New York -** \n\nPopulation: " + (nycount))
.setThumbnail("")
.setColor("#0352A2");
message.channel.send(embed);
function1();
}
});
}

function1();
setTimeout(function2, 8000);






bot.login('NTcyNDE3MTA3MjkyMTkyNzg5.XMb_Ag.DktOR4TdHVseqGk2ur0Eys7sTF0');
