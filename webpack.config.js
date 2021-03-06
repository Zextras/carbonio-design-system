/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.js',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@zextras/carbonio-design-system': path.resolve(__dirname, './src/index.ts'),
			'carbonio-design-system-icons': path.resolve(__dirname, './src/icons/index.jsx'),
			'status-table': path.resolve(__dirname, './docs/components/StatusTable.jsx')
		}
	},
	externals: [],
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: 'process/browser'
		}),
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, './src/fonts/'), to: 'fonts' }]
		})
	]
};
