// routes/index.js

var locationBrewer = require('../lib/locationBrewer');
var router = require('koa-router')();
var config = require('../config');

//Data initialization
var data = locationBrewer.getCoordinateArray(config.entityCount);

 // Routes
router.get('/', function *(next) {
	this.message ='Welcome to location-data-mocker!'
});

router.get('/api', function *(next) {
	this.body = JSON.stringify(data);
});

module.exports = router;