const path = require('path');

module.exports = {
	mode: 'development',
	entry: './app.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist/js')
	}
};