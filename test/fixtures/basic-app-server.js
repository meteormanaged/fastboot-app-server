'use strict';

const path = require('path');
const FastBootAppServer = require('../../dist/cjs/fastboot-app-server.js');

let server = new FastBootAppServer({
  distPath: path.resolve(__dirname, './basic-app')
});

server.start();
