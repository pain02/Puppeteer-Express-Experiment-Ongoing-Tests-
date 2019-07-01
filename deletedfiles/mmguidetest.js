const Discord = require('discord.js');
const bot = new Discord.Client();
const puppeteer = require('puppeteer');
var number = 2;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}.`);
  bot.user.setStatus('visible')
});

const serverStats = {
    guildID: '534486991010529300',
    totalUsersID: '534494473804054541',
    memberCountID: '534494559237832717',
    botCountID: '534494610458935318'
};

const yourFunction = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mafiamatrix.com');
await delay(10000);

  var online = await page.evaluate(el => el.innerHTML, await page.$x('//*[@id="general-stats"]/table/tbody/tr[4]/td[2]/text()'));
  console.log(online);


  await browser.close();
};


bot.on('ready', () => {

  bot.channels.get("572414994487181312").setName("Players online: " + ( number))
});

bot.login('NTcyNDE3MTA3MjkyMTkyNzg5.XMb_Ag.DktOR4TdHVseqGk2ur0Eys7sTF0');
