const express = require('express')
var path = require('path')
var fs = require('fs')
const puppeteer = require('puppeteer')

var bodyParser = require('body-parser')
const scraper = require('./utils/scraper')
const app = express()
app.set('view engine', 'pug');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views/loggedin.html"));

app.set('views', path.join(__dirname, "views"));
app.get('/', function (req, res){
  res.sendFile('index.html', {root: path.join(__dirname, 'views')});


});



app.get('/loggedin', function(req, res) {
  res.sendFile(__dirname + "/views/loggedin.html");
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
await page.waitFor(2000)
res.redirect('/loggedin');


const name1 = (await page.$x('//*[@id="display"]/a'))[0];//name

const text = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name1);

console.log(text)








//res.sendFile('index.html', {root: path.join(__dirname, 'views')});

})

app.get('/loggedin', function(req, res) {
res.render('loggedin', {name: text});
});

app.listen(process.env.PORT || 3000)

server = express();



console.log(text)
res.sendFile('loggedin', { message: 'Name: ' + text })
//res.sendFile('index.html', {root: path.join(__dirname, 'views')});

})
