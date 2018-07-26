require('dotenv').config();
const setlistFetcher = require('./lib/setlistFetcher');

console.log(setlistFetcher.fetchSetlist());
