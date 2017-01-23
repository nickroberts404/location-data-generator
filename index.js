#!/usr/bin/env node

var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();
var logger = require('koa-logger');
var config = require('./config');
var koa = require('koa');
var app = koa();
var locationBrewer = require('./lib/locationBrewer');

//Data initialization
var data = locationBrewer.getCoordinateArray(config.entityCount);

// Port for server to run on
var port = 3030;

// Basic Middleware
app.use(logger());
app.use(bodyParser());
 
 // Routes
router.get('/', function *(next) {
	this.message ='Welcome to location-data-mocker!'
});

router.get('/api', function *(next) {
	this.body = JSON.stringify(data);
});

// Route Middleware
app.use(router.routes())
app.use(router.allowedMethods());

// Server spinning
app.listen(port);
console.log('Now listening at http://localhost:'+port);