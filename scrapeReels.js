const fs = require('fs');
const puppeteer = require('puppeteer');
const getInstagramReel = require('./getInstagramReel.js');

async function setCookies(page, cookiesFile) {
    const cookies = JSON.parse(fs.readFileSync(cookiesFile, 'utf8'));
    await page.setCookie(...cookies);
}

function filterInstagramURLs(urls) {
    // Define a regular expression pattern to match URLs with 'q' or 'reel' after 'instagram.com'
    const pattern = /https:\/\/www\.instagram\.com\/(reel)\/[\w-]+\//;
    // Use the filter method to extract URLs that match the pattern
    const filteredURLs = urls.filter(url => pattern.test(url));
    return filteredURLs;
}

let reel;

const scrapeReels = async (username = 'theoddballgazette', scrollCounts = 0, wantToDownload = true) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await setCookies(page, 'exported-cookies.json');
    console.log('cookies set');
    // ... rest of your code ...
    try {

        URL = `https://www.instagram.com/${username}/reels/`;
        console.log('Entered url');
        await page.goto(URL, { waitUntil: 'networkidle0' });
        console.log('page loaded : ' + username);
        await page.screenshot({ path: 'screenshot6.png' }, { fullPage: true });

        for (let i = 0; i < scrollCounts; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, document.body.scrollHeight);
                console.log('scrolling');
            });
            await new Promise(resolve => setTimeout(resolve, 1000)); // wait for a second // wait for a second
        }
        // Wait for at least one matching element to be present on the page
        await page.waitForSelector('a[role="link"]');
        // Log the number of matching elements
        const links = await page.$$eval('a[role="link"]', links => links.map(link => link.href));
        console.log('Filtering the Links...');
        const filteredLinks = filterInstagramURLs(links);
        console.log('Completed Filtering the Links...');
        console.log(filteredLinks);
        if (wantToDownload) {
            reel = await getInstagramReel(filteredLinks);
            console.log(reel);
        }
        await browser.close();
        return reel;
    } catch (error) {
        console.error(error);
        await browser.close();
    }



};

// (async () => {
//     const zz = await scrapeReels();
//     console.log(zz);
// })();

module.exports = scrapeReels;