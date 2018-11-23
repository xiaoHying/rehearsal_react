const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool:"source-map",
    mode:"production",
    entry:"./app/index",
    output:{
        path:path.join(__dirname, "app/dist"),
        filename:"renderer.prod.js",
        publicPath:"./dist/",
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
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
            use:["htmllint-loader","html-loader",]
        },{
            test:/\.css$/,
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
            use:[{
                loader:"url-loader",
                options:{
                    limit:8192
                }
            }]
        },{
            test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
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
            // '/api':"http://localhost:3000"
        },
        contentBase:path.join(__dirname,"app"),
        compress:true,
        historyApiFallback:true,
        hot:true,
        https:false,
        noInfo:true,
        inline:true,
        port:9000
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
}