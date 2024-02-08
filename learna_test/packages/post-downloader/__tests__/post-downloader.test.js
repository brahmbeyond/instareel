'use strict';

const postDownloader = require('..');
const assert = require('assert').strict;

assert.strictEqual(postDownloader(), 'Hello from postDownloader');
console.info('postDownloader tests passed');
