#!/usr/bin/env ./node_modules/.bin/babel-node

import '../server/env';

import esMain from "es-main";

import { crypto } from '../server/lib/encryption';

if (process.argv.length < 2) {
  console.error('Usage: npm run script ./scripts/encrypt.js [+d] CONTENT');
  process.exit(1);
}

const run = () => {
  const decrypt = process.argv[2] === '+d';
  const string = decrypt ? process.argv.slice(3).join(' ') : process.argv.slice(2).join(' ');

  console.log(decrypt ? crypto.decrypt(string) : crypto.encrypt(string));
};

if (esMain(import.meta)) {
  run();
}
