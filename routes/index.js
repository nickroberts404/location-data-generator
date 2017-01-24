// routes/index.js

var locationBrewer = require('../lib/locationBrewer');
var router = require('koa-router')();
var options = require('../options');

//Data initialization
var data = locationBrewer.getCoordinateArray(options.nodes, options.bbox);

 // Routes
router.get('/', function *(next) {
	this.message ='Welcome to location-data-mocker!'
});

router.get('/api', function *(next) {
	this.body = JSON.stringify(data);
});

module.exports = router;