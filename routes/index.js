// routes/index.js

var locationBrewer = require('../lib/locationBrewer');
var router = require('express').Router();
var options = require('../options');

//Data initialization
var data = locationBrewer.getCoordinateArray(options.nodes, options.bbox);

 // Routes
router.get('/', (req, res) => {
	res.send('index.html');
});

router.get('/api', (req, res) => {
	res.send(data);
});

module.exports = router;