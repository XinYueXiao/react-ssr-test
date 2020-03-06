/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:48:32
 */
import React from 'react'
import ReactDom from 'react-dom'
import routes from '../src/App'
import { BrowserRouter, Route } from 'react-router-dom'
import { getClientStore } from '../src/store/store'
import { Provider } from 'react-redux'
import Header from '../src/component/Header'
//注入JS
const Page = <Provider store={getClientStore()}>
    <BrowserRouter>
        <Header />
        {routes.map(route => <Route {...route}></Route>)}
    </BrowserRouter>
</Provider>
ReactDom.hydrate(Page, document.getElementById('root'))