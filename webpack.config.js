
var PATHS = {
	src: __dirname + '/client/src',
	dist: __dirname + '/public',
}

var config = {
	entry:[
		`${PATHS.src}/index`
	],
	output: {
		path: PATHS.dist,
		filename: 'bundle.js',
		publicPath: '/static/',
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel'], include: PATHS.src},
		]
	}
}

module.exports = config;