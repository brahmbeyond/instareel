import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537');

  const URL = 'https://www.instagram.com/p/C3C2RnRA2dx/'

  // Navigate the page to a URL
  const url = 'https://snapinsta.app';
  await page.goto('https://snapinsta.app');
  page.waitForNavigation({ waitUntil: 'networkidle0' })
  console.log('snapinsta opened');

  // Check if the URL includes '#'
  if (page.url().includes('#')) {
    // If it does, click the div with id 'dismiss-button'
    console.log('clicking dismiss button');
    await page.click('#dismiss-button');
  }

  await page.waitForSelector('#url');
  console.log('url found');
  await page.$eval('input[name="url"]', (el, value) => el.value = value, URL);
  console.log('URL entered');

  if (page.url().includes('#')) {
    // If it does, click the div with id 'dismiss-button'
    console.log('clicking dismiss button');
    await page.click('#dismiss-button');
  }

  await page.waitForSelector('button[type="submit"]');
  await page.$eval('button[type="submit"]', button => button.click());
  console.log('submit clicked');
  // Check if the URL includes '#'

  if (page.url().includes('#')) {
    // If it does, click the div with id 'dismiss-button'
    console.log('clicking dismiss button');
    await page.click('#dismiss-button');
  }

  await page.waitForSelector('.download-bottom');
  console.log('download-bottom found');

  if (page.url().includes('#')) {
    // If it does, click the div with id 'dismiss-button'
    console.log('clicking dismiss button');
    await page.click('#dismiss-button');
  }

  const href = await page.$eval('.download-bottom a', a => a.href);
  console.log(href);


  await browser.close();
})();


