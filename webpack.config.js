const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./app/index.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader", // compiles Sass to CSS
				options: {
					sourceMap: true,
					includePaths: [
						path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
					]
				}
			}]
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'es2015']
			}
		}]
	}
};
