/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:07:12
 */
import path from 'path'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import routes from '../src/App'
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'
import Header from '../src/component/Header'
const { createProxyMiddleware } = require('http-proxy-middleware');
const store = getServerStore()
const app = express()
//设置静态资源目录
app.use(express.static('public'))
app.use('/api', createProxyMiddleware({ target: 'http://localhost:9090', changeOrigin: true }));
function csrRender(res) {
    //获取打包后文件路径
    const pathName = path.resolve(process.cwd(), 'public/index.csr.html')
    //读取文件
    const html = fs.readFileSync(pathName, 'utf-8')
    //返回
    return res.send(html)
}
app.get('*', (req, res) => {
    if (req.query._mode == 'csr') {
        console.log('url参数判断是否开启csr');
        return csrRender(res)
    }
    const context = {
        css: []
    }
    // 3.2获取根据路由渲染出组件，并且拿到loadData方法获取接口数据
    //存储网络请求
    const promises = []
    //路由匹配
    routes.some(route => {
        const match = matchPath(req.path, route)
        if (match) {
            const { loadData } = route.component
            if (loadData) {
                //处理Promise.all其中一个接口有错误的问题
                // const promise = new Promise((resolve, reject) => {
                //     loadData(store).then(resolve).catch(resolve)
                // })
                //promises.push(promise)
                promises.push(loadData(store))
            }
        }
    })
    //等待网路请求结束在渲染
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
    Promise.allSettled(promises).then(() => {
        //把react组件，解析成HTML
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Header />
                    <Switch>
                        {routes.map(route => <Route {...route}></Route>)}
                    </Switch>
                </StaticRouter>
            </Provider>
        )
        //获取状态码,设置相应code
        if (context.statusCode) {
            //状态切换和页面调转
            res.status(context.statusCode)
        }
        //重定向添加错误码
        if (context.action == 'REPLACE') {
            res.redirect(301, context.url)
        }
        const css = context.css.join('\n')
        res.send(`
<html>
    <head>
        <meta charset='utf-8'/>
        <title>react ssr</title>
        <style>
        ${css}
        </style>
    </head>
    <body>
        <div id="root">${content}</div> 
        <script>
         window.__context=${JSON.stringify(store.getState())}
        </script>
        <script src='bundle.js'></script>
    </body>
</html>
`)
    }).catch((err) => {
        res.send('500报错了')
    })
})
app.listen(9093, () => {
    console.log('成功');
})