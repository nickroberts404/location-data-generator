#!/usr/bin/env node

var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var router = require('./routes');
var koa = require('koa');
var app = koa();

// Port that server will listen on
var port = require('./config').port;

// Basic Middleware
app.use(logger());
app.use(bodyParser());

// Route Middleware
app.use(router.routes())
app.use(router.allowedMethods());

// SPIN IT!!!
app.listen(port);
console.log('Now listening at http://localhost:'+port);





