const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'./app/index.jsx'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
		alias: {

		},
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader", // translates CSS into CommonJS
			}, {
				loader: "sass-loader", // compiles Sass to CSS
			}]
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'es2015', 'stage-1']
			}
		},{
			test: /\.css?$/,
			loader: 'style-loader!css-loader?modules',
  		include: /flexboxgrid/
		}]
	}
};
