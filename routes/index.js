// routes/index.js

var locationBrewer = require('../lib/locationBrewer');
var router = require('express').Router();
var options = require('../options');
var settings = require('../settings');

//Data initialization
var data = locationBrewer.getCoordinateArray(options.nodes, options.bbox);


 // Routes
router.get('/', (req, res) => {
	res.send('index.html');
});

router.get('/api', (req, res) => {
	res.send(data);
});

router.get('/settings', (req, res) => {
	res.send(settings);
});

router.post('/settings', (req, res) => {
	console.log(req.body);
})

module.exports = router;