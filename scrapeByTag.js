const puppeteer = require('puppeteer');
const fs = require('fs');
const downloadImages = require('./downloadImages.js');

async function setCookies(page, cookiesFile) {
    const cookies = JSON.parse(fs.readFileSync(cookiesFile, 'utf8'));
    await page.setCookie(...cookies);
}

const scrapeByTag = async (tag, wantToDownload = true) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await setCookies(page, 'exported-cookies.json');

    pageURL = `https://www.instagram.com/explore/tags/${tag}/`;
    await page.goto(pageURL);
    await page.goto(pageURL, { waitUntil: 'networkidle0' });
    console.log(tag + ':tag page loaded');
    await page.evaluate(() => {
        window.scrollBy(0, document.body.scrollHeight);
        console.log('scrolled');
    })

    let images = await page.$$eval('img', images =>
        images.map(image => image.getAttribute('src'))
    );

    images = images.slice(2);
    console.log('Number of images found: ', images.length);
    // console.log(images);   // array of image links
    await browser.close();
    if (wantToDownload) {
        downloadImages(images);
    }
    return images;

}






module.exports = scrapeByTag;