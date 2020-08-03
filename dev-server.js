const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const devConfig = require("./webpack.config.dev");
const webpack = require("webpack");
const express = require("express");
const path = require("path");

const app = express();
const port = 3030;

const compiler = webpack(devConfig);

let hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true';
let entries = Object.keys(devConfig.entry);

//  添加热加载信息
entries.forEach((key) => {
    devConfig.entry[key].push(hotMiddlewareScript);
})

//  添加插件信息
if(devConfig.plugins === undefined) {
    devConfig.plugins = []
}


app.use(WebpackDevMiddleware(compiler, {
    publicPath: "/",
    stats: {colors: true},
    lazy: false,
    historyApiFallback:true,
    hot:true,
    inline:true,
    noInfo:false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
}));
app.use(WebpackHotMiddleware(compiler));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/app.html');
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});
