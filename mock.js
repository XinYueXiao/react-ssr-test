/*
 * @Descripttion:模拟接口
 * @Author: wangxinyue
 * @Date: 2020-03-06 20:44:17
 */
let express = require('express')
const app = express()
app.get('/api/course/list', (req, res) => {
    //简单的跨域处理
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', "application/json;charset=utf-8")
    res.json({
        code: 0,
        list: [
            { name: 'JAVA', id: 1 },
            { name: 'Node', id: 2 },
            { name: 'React', id: 3 },
            { name: 'Vue', id: 4 },
        ]
    })
})
app.listen(9090, () => {
    console.log('接口启动')
})