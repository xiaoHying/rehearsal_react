const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    devtool:"source-map",
    mode:"production",
    entry:"./app/index.js",
    output:{
        path:path.join(__dirname, "app/dist"),
        filename:"boundle.js",
        publicPath:"./dist/",
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
        modules: [path.join(__dirname, 'app'), 'node_modules'],
        alias:{
            '@': path.join(__dirname, 'app'),
        }
    },
    module:{
        rules:[{
            test:/\.(jsx|js)?$/,
            exclude:/node_modules/,
            include:[
                path.resolve(__dirname,"app"),
            ],
            use:[{
                loader:"babel-loader",
                options:{
                    presets:["es2015","react"]
                },
            }]
        },{
            test:/\.html$/,
            exclude:/node_modules/,
            use:["htmllint-loader","html-loader"]
        },{
            test:/\.css$/,
            exclude:/node_modules/,
            use:[{
                loader:"css-loader",
                options:{
                    minimize:true,
                }
            },{
                loader:"style-loader",
            }]
        },{
            test:/\.(scss|sass)$/,
            exclude:/node_modules/,
            use:[{
                loader: "css-loader",
                options: {
                    minimize: true,
                },
            },{
                loader:"sass-loader"
            },{
                loader:"style-loader"
            }],
        },{
            test:/\.(png|jpg|gif|svg)$/i,
            exclude:/node_modules/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:8192
                }
            }]
        },{
            test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            exclude:/node_modules/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:10000
                }
            }]
        }]
    },
    devServer:{
        proxy:{
            '/api':"http://localhost:3000"
        },
        contentBase:path.join(__dirname,"app"),
        compress:true,
        historyApiFallback:true,
        hot:true,
        https:false,
        noInfo:true,
        inline:true,
        host:"localhost",
        port:9000
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/app.html'),
            inject: true
        })
    ]
}