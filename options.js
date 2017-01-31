// options.js
// Uses commander.js to parse CLI arguments.

var program = require('commander');
var settings = require('./settings');

var parseBBox = (i) => {
	i = i.split(',').map(parseFloat);
	if(i.length !== 4) return settings.boundingFeature;
	return [[i[0], i[1]], [i[2], i[3]]];
}

program
	.version('0.0.1')
	.option('-n, --nodes <n>', 'The amount of nodes', i => parseInt(i), settings.nodeCount)
	.option('-b, --boundingFeature <n>', 'The bounding box, NW to SE [[lat1, lng1], [lat2, lng2]]', parseBBox, settings.boundingFeature)
	.parse(process.argv);

module.exports = program;