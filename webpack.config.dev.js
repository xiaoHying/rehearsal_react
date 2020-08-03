const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const badeConfig = require("./webpack.config.base.js");

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH,"app");
const devConfig = merge(badeConfig, {
    devtool:"source-map",
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:3030' }),
        // new HtmlWebpackPlugin({
        //     title:"做一件自己喜欢做的事",
        //     template: path.resolve(SRC_PATH, 'app.html'),
        //     inject: true,
        //     filename: "./index.html",
        //     favicon:"./favicon.ico",
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
    ]
});
module.exports = devConfig;
