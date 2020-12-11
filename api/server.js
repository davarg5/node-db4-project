const express = require('express');

const server = express();

server.use(express.json());

const cookbookRouter = require('./cookbook/cookbook-router');
server.use('/api/cookbook', cookbookRouter);

module.exports = server;