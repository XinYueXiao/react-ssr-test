/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:48:32
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'
//注入JS
const Page = <BrowserRouter>
    {App}
</BrowserRouter>
ReactDom.hydrate(Page, document.getElementById('root'))