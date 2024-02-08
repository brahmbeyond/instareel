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


{/* <a href="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2luc3RhZ3JhbS5mZGVsMTEtMy5mbmEuZmJjZG4ubmV0L3YvdDY2LjMwMTAwLTE2LzQ3NTQwNjI4XzExNzA5MDQwNTA3MzcwMzlfNTY2OTMzNDAyODUyNTEzMzIyN19uLm1wND9fbmNfaHQ9aW5zdGFncmFtLmZkZWwxMS0zLmZuYS5mYmNkbi5uZXQmX25jX2NhdD0xMTEmX25jX29oYz1EZ1Zyb0xfM21pQUFYOS1uYmt5JmVkbT1BUF9WMTBFQkFBQUEmY2NiPTctNSZvaD0wMF9BZkJBNElMdlNicFowMDVpSjVHcjdPQ2MxUHRuOXdPaGFGTG5GclVQeVg2Nnp3Jm9lPTY1QzY5QUU0Jl9uY19zaWQ9Mjk5OWI4JmRsPTEiLCJmaWxlbmFtZSI6IlNuYXBpbnN0YS5hcHBfdmlkZW9fNDc1NDA2MjhfMTE3MDkwNDA1MDczNzAzOV81NjY5MzM0MDI4NTI1MTMzMjI3X24ubXA0In0.u81ytxwu-e9Yi_DZ7ouRKjczqjjK_ToGJ_KvH7ufSPI&amp;dl=1&amp;dl=1" class="btn download-media flex-center" data-ad="true" data-event="click_download_btn">Download Video</a> */ }