---
title: Cookies Handling in Instareel
description: A guide on how to export your login cookies in JSON format and use them with Instareel.
image: /path/to/your/image.jpg
keywords: [Instareel, Cookies, JSON, Instareel, Installation, Javascript,Instagram downloader,instagram,reels downloader,instagram post downloader,instagram reels downloader,Javascript package, Node.js, npm]
sidebar_position: 8
---

# Cookies


## Instructions
To use this tool, you need to export your login cookies in JSON format and place them in the root directory of the project. Follow these steps:

1. Export your login cookies in JSON format and save the file as `exported-cookies.json`.
2. Place the `exported-cookies.json` file in the root directory of the project.
3. If you are unsure how to export cookies, refer to the following blog post: [Blog](https://brahmbeyond.code.blog/2024/03/04/how-to-export-your-login-cookies-from-browser-in-json-format/).
4. Create a file and name it `setCookies.js` and put this code inside:

```js title="setCookies.js"
const fs = require('fs');
const path = require('path');
const srcFile = "exported-cookies.json";
const targetDir = path.join("node_modules", "@brahmbeyond", "instareel");
if (!fs.existsSync(srcFile)) {
    console.error(`Source file ${srcFile} does not exist.`);
    process.exit(1);
}
if (!fs.existsSync(targetDir)) {
    console.error(`Target directory ${targetDir} does not exist.`);
    process.exit(1);
}
fs.copyFileSync(srcFile, path.join(targetDir, srcFile));
console.log("Cookies all set.");

```
and then run

```bash
node setCookies.js
```

## Purpose
The Instagram features are hidden behind a login wall, requiring cookies for access. By following these instructions, you will be able to provide the necessary cookies for the tool to function properly.
