---
sidebar_position: 2
---

# By Username

## Function - scrapePosts()

- **Check if the cookies file is already set.** If not the Check Out [How to set Cookies](../Cookies)
- **Remember, all functions return promises.**

### Arguments
`scrapePosts` takes 3 arguments: `scrapePosts('brahmbeyond',1, true)`
- Username
- Number (`Scroll Count` - the more scroll count the more posts will be scraped) by default its set to `1`
- Boolean (`true/false`) - indicating whether you want to download the images or not , by default its set to `true`

### Download Images with Links Included
By default, the second argument is set to `true` (meaning images will be downloaded to a folder named 'Images').

```js title="insta.js"
import scrapePosts from '@brahmbeyond/instareel'
// const scrapePosts = reuire('@brahmbeyond/instareel')

async function main() {
    const images = await scrapePosts('brahmbeyond',4, true);
    console.log(images); // This will log the array of image URLs  
}

main().catch(console.error);

```

### Download Images only

```js title="insta.js"
import scrapePosts from '@brahmbeyond/instareel'
// const scrapePosts = reuire('@brahmbeyond/instareel')

async function main() {
     await scrapePosts('brahmbeyond',1, true); // this will download images only

}

main().catch(console.error);
```


### If you only want Image Links only
Set second argument to `false`  
```js title="insta.js"
import scrapePosts from '@brahmbeyond/instareel'
// const scrapePosts = reuire('@brahmbeyond/instareel')

async function main() {
    const images = await scrapePosts('brahmbeyond',1, false);
    console.log(images); // This will log the array of image URLs
}

main().catch(console.error);
```



### You can also use .then()

```js title="insta.js"
import scrapePosts from '@brahmbeyond/instareel'
// const scrapePosts = reuire('@brahmbeyond/instareel')

scrapePosts('brahmbeyond',1, true).then(images => {
    console.log(images); // This will log the array of image URLs
});
```


