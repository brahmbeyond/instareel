#!/usr/bin/env node

const getInstagramReel = require('./getInstagramReel.js')
const { Command } = require('commander');
const program = new Command();
const { exec } = require('child_process');


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

program
    .command('cookies')
    .description('Set Cookies')
    .action()


program.parse(process.argv)    