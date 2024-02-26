#!/usr/bin/env node

const getInstagramReel = require('./getInstagramReel.js')
const { Command } = require('commander');
const program = new Command();

program
    .command('get-reel <url...>')
    .description('Download Instagram Reel')
    .action(async (url) => {
        try {
            const reelLink = await getInstagramReel(url);
            console.log(reelLink);
        } catch (error) {
            console.log(error)
        }
    })


program.parse(process.argv)    