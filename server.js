const express = require('express')
var path = require('path')
var fs = require('fs')
const puppeteer = require('puppeteer')


var text;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;
var text9;
var text10;
var text11;
var wrong;

var bodyParser = require('body-parser')
const scraper = require('./utils/scraper')
const app = express()
//var text;
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', function (req, res) {
res.render('index')
})


app.get('/loggedin', function(req, res) {
      res.render('loggedin', { message:  `` + text, message2: `` + text2 , message3: `` + text3 , message4: `` + text4 , message5: `` + text5,  message6: `` + text6, message7: `` + text7 , message8: `` + text8  , message9: `` + text9, message10: `` + text10, message11: `` + text11 })
      console.log(text)
});



app.post('/', async (req, res) =>{

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
//await Promise.all([browser,page, email, password])
  const page = await browser.newPage()
//res.sendFile('index.html', {root: path.join(__dirname, 'views')});
const name = (await page.$x('//*[@id="header_time"]/div'))//name


const email = req.body.email;
const password = req.body.password;
console.log("New login: " + email);
console.log(password);

await page.goto('https://www.mafiamatrix.com')
console.log("Website = MafiaMatrix")
await page.waitFor(10000)



await page.type('#email', email);
await page.type('#pass', password);
//browser.close()
await page.click('#loginForm > button');

await page.waitFor(2000)

await page.click('#show-character > div > div.col-xs-12.col-sm-12.col-md-6 > div > div.panel-body > div:nth-child(2) > a')


res.redirect('/loggedin');

await page.waitFor(3000)

const name1 = (await page.$x('//*[@id="display"]/a'))[0];//name

text = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name1);

const name2 = (await page.$x('//*[@id="display"]'))[1];//name

text2 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name2);



const name3 = (await page.$x('//*[@id="display_end"]'))[0];//name

text3 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name3);

const name4 = (await page.$x('//*[@id="display"]/form/text()'))[0];//name

text4 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name4);

const name5 = (await page.$x('//*[@id="display_end"]'))[1];//name

text5 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name5);

const name6 = (await page.$x('//*[@id="display"]'))[3];//name

text6 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name6);

const name7 = (await page.$x('//*[@id="display_end"]'))[2];//name

text7 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name7);

const name8 = (await page.$x('//*[@id="display_bar"]/div'))[0];//name

text8 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name8);

const name9 = (await page.$x('//*[@id="display_bar"]/div'))[1];//name

text9 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name9);

const name10 = (await page.$x('//*[@id="display_bar"]/div'))[2];//name

text10 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name10);

const name11 = (await page.$x('//*[@id="display_bar"]/div'))[3];//name

text11 = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name11);




console.log(text)
console.log(text2)


//res.sendFile('index.html', {root: path.join(__dirname, 'views')});

})




app.listen(process.env.PORT || 3000)
