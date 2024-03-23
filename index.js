const getInstagramReel = require('./getInstagramReel.js');
const downloadImages = require('./downloadImages.js');
const scrapeByTag = require('./scrapeByTag.js');
const scrapePosts = require('./scrapePosts.js');
const scrapeReels = require('./scrapeReels.js');
const scrapeWithoutLogin = require('./scrapeWithoutLogin.js');

module.exports = {
    getInstagramReel,
    downloadImages,
    scrapeByTag,
    scrapePosts,
    scrapeReels,
    scrapeWithoutLogin
};

