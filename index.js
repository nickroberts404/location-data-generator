#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const morgan = require('morgan');

const app = express();

// Port that server will listen on
const port = require('./config').port;

// Basic Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Router
app.use(router);

// SPIN IT!!!
if(!module.parent) {
	app.listen(port, () => console.log('Now listening at http://localhost:'+port));
}





