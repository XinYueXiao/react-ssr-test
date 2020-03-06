/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:07:12
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'
import { StaticRouter } from 'react-router-dom'
const app = express()
//设置静态资源目录
app.use(express.static('public'))
app.get('*', (req, res) => {

    const content = renderToString(
        <StaticRouter location={req.url}>
            {App}
        </StaticRouter>
    )
    res.send(`
    <html>
        <head>
            <meta charset='utf-8'/>
            <title>react ssr</title>
        </head>
        <body>
            <div id="root">${content}</div> 
            <script src='bundle.js'></script>
        </body>
    </html>
    `)
})
app.listen(9093, () => {
    console.log('成功');
})