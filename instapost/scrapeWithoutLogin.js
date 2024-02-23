const puppeteer = require('puppeteer');

const scrapeWithoutLogin = async (tag) => {
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
    console.log(randomUserAgent);
    await page.setUserAgent(randomUserAgent);

    URL = `https://www.instagram.com/explore/tags/${tag}/`;
    await page.goto(URL);

    await page.goto(URL, { waitUntil: 'networkidle0' });
    console.log('page loaded');
    await page.evaluate(() => {
        window.scrollBy(0, document.body.scrollHeight);
        console.log('scrolled');
    })

    let images = await page.$$eval('img', images =>
        images.map(image => image.getAttribute('src'))
    );

    images = images.slice(2);
    console.log('Number of scraped images: ', images.length);
    console.log(images);   // array of image links
    await browser.close();
    return images;

}

scrapeWithoutLogin('nature');




module.exports = scrapeWithoutLogin;