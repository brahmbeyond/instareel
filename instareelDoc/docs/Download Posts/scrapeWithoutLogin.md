---
sidebar_position: 1
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

```js title="insta.js"
async function main() {
    const images = await scrapeWithoutLogin('nature');
    console.log(images); // This will log the array of image URLs  
}

main().catch(console.error);

```

### Download Images only

```js title="insta.js"
async function main() {
     await scrapeWithoutLogin('nature'); // this will download images only

}

main().catch(console.error);
```


### If you only want Image Links only
Set second argument to `false`  
```js title="insta.js"
async function main() {
    const images = await scrapeWithoutLogin('nature', false);
    console.log(images); // This will log the array of image URLs
}

main().catch(console.error);
```



### You can also use .then()

```js title="insta.js"
scrapeWithoutLogin('nature', false).then(images => {
    console.log(images); // This will log the array of image URLs
});
```


