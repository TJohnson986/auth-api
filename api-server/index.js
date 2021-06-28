'use strict';

const { db } = require('./src/models');
const server = require('../auth-server/src/server.js');

db.sync().then(() => {
  server.start(3000);
});