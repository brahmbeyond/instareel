** writing documentation
# Instagram Reel Downloader

This project allows you to download Instagram Reels using Javascript and Puppeteer.

## Installation
```bash
npm i @brahmbeyond/instareel 
```

## Usage
#### &rarr; CLI 
```bash
reel get-reel <url of reel>
```
`example :`
```bash
reel get-reel https://www.instagram.com/p/C3C2RnRA2dx/
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

```javascript

const getInstagramReel = require('@brahmbeyond/instareel');

const instagramReelURL = ['https://www.instagram.com/reel/CU6nIv4jRBH/'];

getInstagramReel(instagramReelURL)
    .then(() => console.log('Done'))
    .catch(err => console.error(err));
``` 
>Please note that the `getInstagramReel` function is asynchronous, so we use `.then()` and `.catch()` to handle the Promise it returns. We can also use `async/await` syntax for a more synchronous style of handling Promises. Here's how you can do it:

```javascript
async function main() {
    const instagramReelURL = ['https://www.instagram.com/reel/CU6nIv4jRBH/'];

    try {
        await getInstagramReel(instagramReelURL);
        console.log('Done');
    } catch (err) {
        console.error(err);
    }
}

main();

```


dev-
npm run reel link
pro-
insta get-reel link

### todo
- human behaviour





