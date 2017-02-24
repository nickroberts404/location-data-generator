// options.js
// Uses commander.js to parse CLI arguments.

var program = require('commander');

const defaults = {
	nodeCount: 500,
	boundingFeature: [[90, -180],[-90, 180]],
}

var parseBBox = (i) => {
	i = i.split(',').map(parseFloat);
	if(i.length !== 4) return defaults.boundingFeature;
	return [[i[0], i[1]], [i[2], i[3]]];
}

program
	.version('0.0.1')
	.option('-n, --nodeCount <n>', 'The amount of nodes <int>', i => parseInt(i), defaults.nodeCount)
	.option('-b, --boundingFeature <b>', 'The bounding box, NW to SE <lat1,lng1,lat2,lng2>', parseBBox, defaults.boundingFeature)
	.parse(process.argv);

module.exports = Object.assign({}, defaults, program);
