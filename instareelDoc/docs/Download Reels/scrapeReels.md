---
sidebar_position: 2
---

# By Username

## Function - scrapeReels()

- **Check if the cookies file is already set.** If not the Check Out [How to set Cookies](../Cookies)
- **Remember, all functions return promises.**

### Arguments
`scrapeReels` takes 3 arguments: `scrapeReels('brahmbeyond',1, true)`
- Username
- Number (`Scroll Count` - the more scroll count the more posts will be scraped) by default its set to `1`
- Boolean (`true/false`) - indicating whether you want to download the Reels or not , by default its set to `true`

### Download Reels with Links Included
By default, the second argument is set to `true` (meaning Reels will be downloaded to a folder named 'Reels').
- The Reels Downloadable links time valididty is not tested so don't know how long it will be valid.

```js title="insta.js"
import scrapeReels from '@brahmbeyond/instareel'
// const scrapeReels = reuire('@brahmbeyond/instareel')

async function main() {
    const Reels = await scrapeReels('brahmbeyond',4, true);
    console.log(Reels); // This will log the array of Reels URLs  
}

main().catch(console.error);

```

### Download Reels only

```js title="insta.js"
import scrapeReels from '@brahmbeyond/instareel'
// const scrapeReels = reuire('@brahmbeyond/instareel')

async function main() {
     await scrapeReels('brahmbeyond',1, true); // this will download Reels only

}

main().catch(console.error);
```


### If you only want Reels Links(Downloadable) only
Set second argument to `false`  
```js title="insta.js"
import scrapeReels from '@brahmbeyond/instareel'
// const scrapeReels = reuire('@brahmbeyond/instareel')

async function main() {
    const Reels = await scrapeReels('brahmbeyond',1, false);
    console.log(Reels); // This will log the array of Reels URLs
}

main().catch(console.error);
```



### You can also use .then()

```js title="insta.js"
import scrapeReels from '@brahmbeyond/instareel'
// const scrapeReels = reuire('@brahmbeyond/instareel')

scrapeReels('brahmbeyond',1, true).then(Reels => {
    console.log(Reels); // This will log the array of Reels URLs
});
```


