# Instagram Reel Downloader
This package provides a function to download Instagram Reels using Puppeteer.

## Installation
Install the package using npm:
```
npm install instagram-reel-downloader
```

## Usage
In a Node.js file
First, import the `getInstagramReel` function from the package:

```
const getInstagramReel = require('instagram-reel-downloader');
```
Then, call the function with the URL of the Instagram Reel you want to download:

```
const URL = 'https://www.instagram.com/p/C3C2RnRA2dx/'; 
getInstagramReel(URL);
```
## In a React component
You can use the `getInstagramReel` function in a React component like this:
```
import React, { useEffect } from 'react';
import getInstagramReel from 'instagram-reel-downloader';

function MyComponent() {
    useEffect(() => {
        const URL = 'https://www.instagram.com/p/C3C2RnRA2dx/';
        getInstagramReel(URL);
    }, []);

    return <div>My Component</div>;
}

export default MyComponent;
```

In this example, the `getInstagramReel` function is called when the component mounts, thanks to the `useEffect` hook.

## Requirements
This package requires Node.js and Puppeteer. Make sure you have these installed before using the package.

### Note
> This package is for educational purposes only. Please respect the rights of content creators and do not use this package to download and distribute content without permission.