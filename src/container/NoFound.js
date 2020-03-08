/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-08 16:09:50
 */
import React from 'react'
import { Route } from 'react-router-dom'
function Status({ code, children }) {
    return <Route render={({ staticContext }) => {
        if (staticContext) {
            //设置code码->server/index
            staticContext.statusCode = code
        }
        return children
    }}></Route>
}
function NotFind(props) {
    return (
        <Status code={404}>
            <h1>404</h1>
            页面找不到了!!!!
        </Status>
    )
}
export default NotFind