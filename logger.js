'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

const db = new Q('database'); 
const files = new Q('files');

const dbEvents = ['create', 'read', 'update', 'delete', 'error'];

dbEvents.forEach(event => {
  db.subscribe(event, payload => {
    console.log(`${event} happened`, payload);
  });
});

files.subscribe('save', payload => {
  console.log('Save', payload);
});

files.subscribe('error', payload => {
  console.log('Error', payload);
});

console.log(db.subscriptions());
console.log(files.subscriptions());