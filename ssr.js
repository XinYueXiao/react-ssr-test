/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-16 12:39:04
 */
const express = require('express')
const axios = require('axios')
const puppeteer = require('puppeteer')
const app = express()
//测试使用puppeteer
async function test(url, path) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://kaikeba.com/')
    await page.screenshot({ path: 'kaikeba.png' })
    await browser.close()
}
app.get('*', async (req, res) => {
    if (req.url == './favicon.ico') {
        res.send({ code: 0 })
    }
    const url = 'http://localhost:9093' + req.url
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: ['networkidle0']
    })
    const html = await page.content()
    console.log("html", html)
    res.send(html)
})
app.listen(8081, () => {
    console.log('8007启动');
})