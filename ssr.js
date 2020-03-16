/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-16 12:39:04
 */
const express = require('express')
const axios = require('axios')
const puppeteer = require('puppeteer')
const app = express()
//测试使用puppeteer,劣势:带有数据的页面会加载很慢,解决方法 添加缓存
async function test(url, path) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://kaikeba.com/')
    await page.screenshot({ path: 'kaikeba.png' })
    await browser.close()
}
//声明缓存字段
const urlCache = {}
app.get('*', async (req, res) => {
    if (req.url == './favicon.ico') {
        res.send({ code: 0 })
    }
    //简单的加缓存,也可以采取一些算法例如lru
    if (urlCache[url]) {
        res.send(urlCache[url])
    }
    const url = 'http://localhost:9093' + req.url
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: ['networkidle0']
    })
    const html = await page.content()
    urlCache[url] = html
    console.log("html", html)
    res.send(html)
})
app.listen(8081, () => {
    console.log('8007启动');
})