const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function downloadImage(url, index) {
    const response = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
        }
    });
    const buffer = Buffer.from(response.data, 'binary');
    const fileExtension = path.extname(new URL(url).pathname);
    const dir = './images';

    // Create the directory if it does not exist
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFile(`${dir}/image${index}${fileExtension}`, buffer, () =>
        console.log('finished downloading image', index));
}

async function downloadImages(imagesLinks) {
    for (let index = 0; index < imagesLinks.length; index++) {
        await downloadImage(imagesLinks[index], index);
    }
}

module.exports = downloadImages;