'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeModules = __dirname + '/node_modules';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        noParse: [],
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.json?$/, loader: 'json'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(ttf|eot|woff2|svg|png|woff)$/, loader: 'url-loader?limit=100000'}
        ]
    }

};

config.addVendor('bootstrap.css', nodeModules + '/bootstrap/dist/css/bootstrap.min.css');

module.exports = config;
