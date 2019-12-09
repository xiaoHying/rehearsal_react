# rehearsal_react
是一个使用react+webpack4搭建的项目底层

### 部署步骤
1、npm install // 安装node运行环境

2、npm run dev // 运行项目

### 项目结构描述

├── Readme.md                   // help

├── app                         // 应用

    ├── api                     // 接口
    
    ├── components              // 组件
    
    ├── route                   // 路由
    
    ├── static                  // 静态文件
    
    ├── views                   // 页面
    
    ├── app.html                // html入口文件
    
    └── index.js                // js入口文件
    
├── .babelrc                    // 转es5语法

├── .eslintignore               // 此文件里的文件不受eslint限制

├── .eslintrc                   // eslint规范

├── .gitignore                  // 此文件里的文件不提交远端

├── dev-server.js               // 热更新服务

├── package.json

├── README.md

├── webpack.config.base.js      // webpack共用

├── webpack.config.dev.js       // webpack dev

├── webpack.config.prod.js      // webpack prod

└── webpack.config.test.js      // webpack test
