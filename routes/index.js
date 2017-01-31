// routes/index.js

var locationBrewer = require('../lib/locationBrewer');
var router = require('express').Router();
var options = require('../options');
var settings = require('../settings');

//Data initialization
var data = locationBrewer.getCoordinateArray(options.nodes, options.boundingFeature);

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
	settings = req.body;
	data = locationBrewer.getCoordinateArray(settings.nodeCount || options.nodeCount, settings.boundingFeature || options.boundingFeature);
	res.send({
		nodes: data,
		settings: settings
	});
})

module.exports = router;