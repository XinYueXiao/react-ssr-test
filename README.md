<!--
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 21:14:40
 -->
# React-SSR
# 主要文件

| 相对路径          | 概述                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------- |
| client/index.js   | 客户端入口：负责页面路由处理及hydrate和render                                          |
| server/index.js   | 服务端入口：负责渲染页面读取页面路由、操作DOM处理、获取异步数据、处理错误及页面404处理 |
| src/store         | redux使用及跨域处理                                                                    |
| mock.js           | 接口数据模拟可单独使用nodemon moke.js 启动                                             |
| webpack.client.js | 客户端打包配置文件                                                                     |
| webpack.server.js | 服务端打包配置文件                                                                     |
