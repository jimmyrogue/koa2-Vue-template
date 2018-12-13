//开发和生成环境相同配置写字这个里边
/* 引入操作路径模块和webpack */
const path = require('path');
const {
	VueLoaderPlugin
} = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	/* 输入文件 */
	entry: {
		index: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')]
	},
	output: {
		/* 输出目录，没有则新建 */
		path: path.resolve(__dirname, '../dist'),
		/* 静态目录，可以直接从这里取文件 */
		publicPath: '/',
		/* 文件名 */
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[name].[chunkhash].js'
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: MiniCssExtractPlugin.loader
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production' ?
					'vue-style-loader' :
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				/* 排除模块安装目录的文件 */
				exclude: /node_modules/
			}, {
				test: /\.png$|\.jpg$|\.gif$|\.ico$/,
				loader: "file-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
			inject: true
		}),
		// new MiniCssExtractPlugin("style.css")
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
}