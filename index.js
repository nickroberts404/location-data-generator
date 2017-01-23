#!/usr/bin/env node

var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();
var logger = require('koa-logger');
var koa = require('koa');
var app = koa();
var port = 3030;

app.use(logger());

app.use(bodyParser());

router.get('/', function *(next) {
	console.log('We got a request!');
});

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(port);
console.log('Now listening at http://localhost:'+port);