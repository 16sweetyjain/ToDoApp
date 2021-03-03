const todo = require('../persistence');

const express = require('express');

const app= express();

const start= ({ port, callback }) =>app.listen(port, callback);            //setting up express server

module.exports = {start};