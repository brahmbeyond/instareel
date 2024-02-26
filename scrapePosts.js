const fs = require('fs');
const puppeteer = require('puppeteer');
const downloadImages = require('./downloadImages.js');


async function setCookies(page, cookiesFile) {
    const cookies = JSON.parse(fs.readFileSync(cookiesFile, 'utf8'));
    await page.setCookie(...cookies);
}

function filterInstagramURLs(urls) {
    const filteredURLs = urls.filter(url => url !== null && url !== undefined);
    return filteredURLs;
}

const scrapePosts = async (username = 'animals.hilarious', scrollCounts = 1, wantToDownload = true) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await setCookies(page, 'exported-cookies.json');
    console.log('cookies set');
    // ... rest of your code ...
    try {

        pageURL = `https://www.instagram.com/${username}/`;
        console.log('Entered url');
        await page.goto(pageURL, { waitUntil: 'networkidle0' });
        console.log('page loaded : ' + username);
        // await page.screenshot({ path: 'screenshot6.png' }, { fullPage: true });

        for (let i = 0; i < scrollCounts; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, document.body.scrollHeight);
                console.log('scrolling ');
            });
            await new Promise(resolve => setTimeout(resolve, 1000)); // wait for a second // wait for a second
        }
        // Wait for at least one matching element to be present on the page
        await page.waitForSelector('a[role="link"]');

        const links = await page.$$eval('a[role="link"]', links => {
            return links.map(link => {
                const img = link.querySelector('img');
                return img ? img.src : null; // Return src attribute if img element is found, otherwise null
            });
        });
        console.log('Filtering the Links...');
        const filteredLinks = filterInstagramURLs(links);
        console.log('Completed Filtering the Links...');
        if (wantToDownload) {
            downloadImages(filteredLinks);
        }
        await browser.close();
        return filteredLinks;

    } catch (error) {
        console.error(error);
        await browser.close();
    }

};

// (async () => {
//     const zz = await scrapePosts();
//     console.log(zz);
// })();



module.exports = scrapePosts;