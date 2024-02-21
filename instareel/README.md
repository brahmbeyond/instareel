# instareel

This project allows you to download your Instagram Reels.It provide you <b>downloadable link</b> for your instagram Reel.<br>
<!-- ![npm](https://img.shields.io/npm/v/@brahmbeyond/instareel) ![NPM](https://img.shields.io/npm/l/@brahmbeyond/instareel) ![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=brahmbeyond.instaD&left_text=instaD%20Visitors) -->

Totol Downlaods - ![NPM Downloads](https://img.shields.io/npm/dt/%40brahmbeyond%2Finstareel)

## Support


If you find this package useful, please consider giving it a star on [GitHub](https://github.com/brahmbeyond/InstaD). This helps others discover it and encourages me to continue improving it.

I'm in learning process and open to all kind of feedbacks.

If you use this package in your project, I'd love to hear about it! Please tag me on [Twitter](https://twitter.com/brahmbeyond) or [Instagram](https://instagram.com/brahmbeyond).

For updated information visit [Github](https://github.com/brahmbeyond/InstaD)


## npm page
https://www.npmjs.com/package/@brahmbeyond/instareel


## Installation
```bash
npm i @brahmbeyond/instareel 
```
To install globally &darr;
```bash
npm i -g @brahmbeyond/instareel 
```

## Usage
#### &rarr; CLI 
```bash
insta get-reel <url of reel>
```
`example :`
```bash
insta get-reel https://www.instagram.com/p/C3C2RnRA2dx/
```

#### OR

```bash
reel get-reel <urls of reels seperated by spaces>
```
`example :`
```bash
reel get-reel https://www.instagram.com/p/C3C2RnRA2dx/ https://www.instagram.com/p/C2ZE9tqLTQz/
```
#### &rarr; Code
- The agruments to the function should be array.
- The result returned is also a array.

```javascript

const getInstagramReel = require('@brahmbeyond/instareel');

const instagramReelURLs = ['https://www.instagram.com/reel/CU6nIv4jRBH/','https://www.instagram.com/reel/CU6nIv4jRBH/'];

getInstagramReel(instagramReelURLs)
    .then(downloadLinks => {
        console.log('Download links:', downloadLinks);
    })
    .catch(error => {
        console.error('Error:', error);
    });
``` 
>Please note that the `getInstagramReel` function is asynchronous, so we use `.then()` and `.catch()` to handle the Promise it returns. We can also use `async/await` syntax for a more synchronous style of handling Promises. Here's how you can do it:

```javascript
async function main() {
    const instagramReelURLs = ['https://www.instagram.com/reel/CU6nIv4jRBH/'];

    try {
     const links = await getInstagramReel(instagramReelURL);
        console.log(links);
    } catch (err) {
        console.error(err);
    }
}

main();

```

## Helper
- If you want the JS code that can download the available array of links which you obtained from above, to your folder then you can use the code below.
Remember to install `AXIOS` - `npm i axios`
```javascript

const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadVideo(url, index) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(path.join(__dirname, `video${index}.mp4`), response.data);
}

const video = ['link','link']; // Replace with your array of Video URLs that you got from the using the npm package

video.forEach((url, index) => {
    downloadVideo(url, index);
});

```
OR 
- you can use it in your HTML with `<a>` tag which on clickin will download the video - 


```html
<a href="<Link_here>">Download Video</a>
```



### Todo
- human behaviour.

## Contributing
Feedback and Contributions are always welcome! 


## Use Wisely

This is a third party library and not associated with Instagram. We're strictly against spam. You are liable for all the actions you take.

## Demo Blog 
https://brahm.code.blog/2024/02/21/introducing-instareel-your-ultimate-instagram-reel-downloader/



