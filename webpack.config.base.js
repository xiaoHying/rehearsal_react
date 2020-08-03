const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode:"production",
    entry:{
        index:[
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            path.resolve(__dirname,"./app/index.js")
        ],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output:{
        path:path.join(__dirname, "./app/dist"),
        filename:"boundle.js",
        publicPath:"/",
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
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            include:[
                path.resolve(__dirname,"app"),
            ],
            use:[{
                loader:"babel-loader",
                options:{
                    presets:["stage-0","react","env","es2015"],
                    plugins: [
                        "react-hot-loader/babel",
                        "transform-class-properties",
                        "transform-decorators-legacy",
                        ['import', {"libraryName": "antd", "style": "css"}]
                    ]
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
                loader:"style-loader!css-loader",
                options:{
                    minimize:true,
                }
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
    }
}
