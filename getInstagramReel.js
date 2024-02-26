const puppeteer = require('puppeteer');

process.on('unhandledRejection', (reason, promise) => {
    if (reason.message !== 'Navigating frame was detached') {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    }
});

const clickDismissButtonIfRequired = async (page) => {
    if (page.url().includes('#')) {
        // console.log('clicking dismiss button');
        await page.click('#dismiss-button');
    }
}


const getInstagramReel = async (instagramReelURL) => {
    let browser;
    let downloadLinks = [];
    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();

        const userAgents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.48'
        ];

        const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
        console.log('UserAgent : ' + randomUserAgent);
        await page.setUserAgent(randomUserAgent);

        let loopCount = 0; // to prevent multiple page.goto calls

        for (let url of instagramReelURL) {
            const WebsiteURL = 'https://snapinsta.app';

            if (loopCount === 0) {
                await page.goto(WebsiteURL);
                page.waitForNavigation({ waitUntil: 'networkidle0' })
            }

            await clickDismissButtonIfRequired(page);

            await page.waitForSelector('#url');

            await page.$eval('input[name="url"]', (el, value) => el.value = value, url);


            await clickDismissButtonIfRequired(page);

            await page.waitForSelector('button[type="submit"]');
            await page.$eval('button[type="submit"]', button => button.click());


            await clickDismissButtonIfRequired(page);

            await page.waitForSelector('.download-bottom');


            await clickDismissButtonIfRequired(page);

            const href = await page.$eval('.download-bottom a', a => a.href);

            downloadLinks.push(href);
            loopCount++;

            if (instagramReelURL.length > 1) {    // if there are multiple URLs
                await page.waitForSelector('.download-footer');

                await clickDismissButtonIfRequired(page);
                await page.$eval('.download-footer a:nth-child(2)', button => button.click());
            }
        }
        return downloadLinks;

    } catch (error) {
        console.error(error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

// const ii = ['https://www.instagram.com/reel/CxOAJPISJqE/']

// const main = async () => {
//     const reel = await getInstagramReel(ii);
//     console.log(reel);
// }

// main();



module.exports = getInstagramReel;

