const reelMe = require('repo/reel/script.js');
const postM = require('repo/post/script.js');

function all() {
    reelMe();
    postM();
    console.log("all");
}   
module.exports = all;
