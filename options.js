// options.js
// Uses commander.js to parse CLI arguments.

var program = require('commander');
var config = require('./config');

program
	.version('0.0.1')
	.option('-n, --nodes <n>', 'The amount of nodes', i => parseInt(i), config.nodeCount)
	.parse(process.argv);

module.exports = program;