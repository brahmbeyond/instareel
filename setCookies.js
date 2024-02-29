const fs = require('fs');
const path = require('path');

// Define the source file and the target directory
const srcFile = "exported-cookies.json";
const targetDir = path.join("node_modules", "@brahmbeyond", "instarel");

// Check if the source file exists
if (!fs.existsSync(srcFile)) {
    console.error(`Source file ${srcFile} does not exist.`);
    process.exit(1);
}

// Check if the target directory exists
if (!fs.existsSync(targetDir)) {
    console.error(`Target directory ${targetDir} does not exist.`);
    process.exit(1);
}

// Copy the source file to the target directory
fs.copyFileSync(srcFile, path.join(targetDir, srcFile));

console.log("Cookies all set.");