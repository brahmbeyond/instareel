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

// const URL = 'https://www.instagram.com/reels/C1YuIvdP1xX/'

const getInstagramReel = async (instagramReelURL) => {

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const userAgents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.48'
        ];

        const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
        // console.log(randomUserAgent);
        await page.setUserAgent(randomUserAgent);

        for (let url of instagramReelURL) {
            const url = 'https://snapinsta.app';
            await page.goto(url);
            page.waitForNavigation({ waitUntil: 'networkidle0' })
            // console.log('snapinsta opened');

            await clickDismissButtonIfRequired(page);

            await page.waitForSelector('#url');
            // console.log('url found');
            await page.$eval('input[name="url"]', (el, value) => el.value = value, instagramReelURL);
            // console.log('URL entered');

            await clickDismissButtonIfRequired(page);

            await page.waitForSelector('button[type="submit"]');
            await page.$eval('button[type="submit"]', button => button.click());
            // console.log('submit clicked');

            await clickDismissButtonIfRequired(page);

            await page.waitForSelector('.download-bottom');
            // console.log('download-bottom found');

            await clickDismissButtonIfRequired(page);

            const href = await page.$eval('.download-bottom a', a => a.href);
            console.log(href);

            await page.close();

        }
        await browser.close();

        // return href;  // return the href value

    } catch (error) {
        console.error(error);
        await browser.close();
    }
}


module.exports = getInstagramReel;
