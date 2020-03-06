/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:07:12
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import routes from '../src/App'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'
import Header from '../src/component/Header'
const store = getServerStore()
const app = express()
//设置静态资源目录
app.use(express.static('public'))
app.get('*', (req, res) => {
    // 3.2获取根据路由渲染出组件，并且拿到loadData方法获取接口数据
    //存储网络请求
    const promises = []
    //路由匹配
    routes.some(route => {
        const match = matchPath(req.path, route)
        if (match) {
            const { loadData } = route.component
            if (loadData) {
                promises.push(loadData(store))
            }
        }
    })
    //等待网路请求结束在渲染
    Promise.all(promises).then(() => {
        //把react组件，解析成HTML
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header />
                    {routes.map(route => <Route {...route}></Route>)}
                </StaticRouter>
            </Provider>
        )

        res.send(`
<html>
    <head>
        <meta charset='utf-8'/>
        <title>react ssr</title>
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
    }).catch(() => {
        res.send('500报错了')
    })
})
app.listen(9093, () => {
    console.log('成功');
})