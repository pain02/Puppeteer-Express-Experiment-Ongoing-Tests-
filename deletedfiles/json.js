const cookie = {
    name: 'cf_clearance',
    value: '43df1236c063b1196c11cf4d6fcd53dc406a04ec-1557765386-3600-150',
    domain: '.mafiamatrix.com',
    url: 'https://mafiamatrix.com/js/population_json.asp',
    path: '/',
    httpOnly: true,
    secure: true
}

const puppeteer = require('puppeteer');

function function1 () {


(async () => {
  const browser = await puppeteer.launch({
  headless: false
   })

const page = await browser.newPage()

//await page.goto('https://mafiamatrix.com/js/population_json.asp');
await page.setCookie(cookie)
//await page.goto('https://mafiamatrix.com/js/population_json.asp');
await page.goto('https://mafiamatrix.com/js/population_json.asp');
await page.waitFor(9000);
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

var nycount = contact.cities[3].count;
var ldcount = contact.cities[2].count;
var hkcount = contact.cities[1].count;
var akcount = contact.cities[0].count;

global.totalpop = parseFloat(akcount) + parseFloat(ldcount) + parseFloat(nycount) + parseFloat(hkcount);


console.log(totalpop);

await browser.close();

})();
}

function function2 () {

  const Discord = require('discord.js');
  const bot = new Discord.Client();

  bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}.`);
    bot.user.setStatus('visible')
  });

bot.on('ready', () => {
  bot.channels.get("572414994487181312").setName("Total Population: " +  (totalpop))
  console.log('completed')
});

bot.login('NTcyNDE3MTA3MjkyMTkyNzg5.XMb_Ag.DktOR4TdHVseqGk2ur0Eys7sTF0');
}

function1();
setTimeout(function2, 15000);
