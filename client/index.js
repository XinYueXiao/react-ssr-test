/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:48:32
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'
import store from '../src/store/store'
import { Provider } from 'react-redux'
//注入JS
const Page = <Provider store={store}>
    <BrowserRouter>
        {App}
    </BrowserRouter>
</Provider>
ReactDom.hydrate(Page, document.getElementById('root'))