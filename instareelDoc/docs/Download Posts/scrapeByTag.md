---
sidebar_position: 1
---

# By Tag

## Function - scrapeByTag()

- **Check if the cookies file is already set.** [If not the Check Out How to set Cookies](../Cookies)
- **Remember, all functions return promises.**

### Arguments
`scrapeByTag` takes 2 arguments: `scrapeByTag('cat', true)`
- Tag name
- Boolean (`true/false`) - indicating whether you want to download the images or not

### Download Images with Links Included
By default, the second argument is set to `true` (meaning images will be downloaded to a folder named 'Images').

```js title="insta.js"
async function main() {
    const images = await scrapeByTag('nature');
    console.log(images); // This will log the array of image URLs  
}

main().catch(console.error);

```

### Download Images only

```js title="insta.js"
async function main() {
     await scrapeByTag('nature'); // this will download images only

}

main().catch(console.error);
```


### If you only want Image Links only
Set second argument to `false`  
```js title="insta.js"
async function main() {
    const images = await scrapeByTag('nature', false);
    console.log(images); // This will log the array of image URLs
}

main().catch(console.error);
```



### You can also use .then()

```js title="insta.js"
scrapeByTag('nature', false).then(images => {
    console.log(images); // This will log the array of image URLs
});
```


