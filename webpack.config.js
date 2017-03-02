const path = require('path');

module.exports = {
	entry: './lib/index',
	output: {
		filename: 'mirageo.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'mirageo',
		libraryTarget: 'umd',
        sourceMapFilename: 'mirageo.map'
	},
	module: {
		rules: [
			{test: /\.js$/, loader: 'babel-loader', exclude: './node_modules'},
		]
	},
	devtool: 'cheap-module-source-map'
}