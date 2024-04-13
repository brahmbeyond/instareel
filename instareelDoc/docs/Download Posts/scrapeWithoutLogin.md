---
title: scrapeWithoutLogin in Instareel
description: A guide on how to use the scrapeWithoutLogin function in Instareel to scrape Instagram posts without login.
keywords: [Instareel, Installation, Javascript,Instagram downloader,instagram,reels downloader,instagram post downloader,instagram reels downloader,Javascript package, Node.js, npm]
sidebar_position: 3
---


# By Tag (Without Login)

## Function - scrapeWithoutLogin()

- **No need for setting Cookies**
- **Remember, all functions return promises.**

### Arguments
`scrapeWithoutLogin` takes 2 arguments: `scrapeWithoutLogin('cat', true)`
- Tag name
- Boolean (`true/false`) - indicating whether you want to download the images or not

### Download Images with Links Included
By default, the second argument is set to `true` (meaning images will be downloaded to a folder named 'Images').

> **Note:** The import syntax (`import ... from '@brahmbeyond/instareel'`) is used with ES6 modules, which are supported in Node.js version 14 and later, and in most modern browsers. If you're using an older version of Node.js or a runtime that doesn't support ES6 modules, you should use the `require` syntax instead (`const ... = require('@brahmbeyond/instareel')`).


```js title="insta.js"
import {scrapeWithoutLogin} from '@brahmbeyond/instareel'
// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')

async function main() {
    const images = await scrapeWithoutLogin('nature');
    console.log(images); // This will log the array of image URLs  
}

main().catch(console.error);

```

### Download Images only

```js title="insta.js"
import {scrapeWithoutLogin} from '@brahmbeyond/instareel'
// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')


async function main() {
     await scrapeWithoutLogin('nature'); // this will download images only

}

main().catch(console.error);
```


### If you only want Image Links only
Set second argument to `false`  
```js title="insta.js"
import {scrapeWithoutLogin} from '@brahmbeyond/instareel'
// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')


async function main() {
    const images = await scrapeWithoutLogin('nature', false);
    console.log(images); // This will log the array of image URLs
}

main().catch(console.error);
```



### You can also use .then()

```js title="insta.js"
import {scrapeWithoutLogin} from '@brahmbeyond/instareel'
// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')


scrapeWithoutLogin('nature', false).then(images => {
    console.log(images); // This will log the array of image URLs
});
```


