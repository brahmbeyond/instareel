# instareel

This project allows you to download your Instagram Reels.It provide you downloadable link for your instagram Reel.<br>
<!-- ![npm](https://img.shields.io/npm/v/@brahmbeyond/instareel) ![NPM](https://img.shields.io/npm/l/@brahmbeyond/instareel) ![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=brahmbeyond.instaD&left_text=instaD%20Visitors) -->

For updated information visit [Github](https://github.com/brahmbeyond/InstaD)

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



### Todo
- human behaviour.

## Contributing
Feedback and Contributions are always welcome! 


## Use Wisely

This is a third party library and not associated with Instagram. We're strictly against spam. You are liable for all the actions you take.





