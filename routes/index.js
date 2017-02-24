// routes/index.js

var locationBrewer = require('../lib/locationBrewer');
var router = require('express').Router();
var settings = require('../settings');

//Data initialization
var data = locationBrewer.getCoordinateArray(settings.nodes, settings.boundingFeature);

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
	settings = Object.assign(settings, req.body);
	data = locationBrewer.getCoordinateArray(settings.nodeCount, settings.boundingFeature);
	res.send({
		nodes: data,
		settings: settings
	});
})

module.exports = router;