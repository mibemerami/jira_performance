const puppeteer = require('puppeteer');
const testPage = require('./testPage');

const base_url = process.env.DEST_URL;
const user = { 
  name: (process.env.USER_NAME), 
  pw: (process.env.USER_PW) 
}; 

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(await testPage(page, base_url, user));
  await browser.close();
})();
