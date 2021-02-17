const express = require('express');
const routes = express.Router();
const receiveMessage = require('../controller/sendZenapi');

routes.post('/receive', receiveMessage.send);

module.exports = routes;