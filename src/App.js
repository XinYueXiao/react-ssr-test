/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 18:46:54
 */

import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'
import User from './container/User'
import NoFound from './container/NoFound'
// export default (<div>
//     <Route path='/' exact component={Index}></Route>
//     <Route path='/about' exact component={About}></Route>
// </div>)
//3.3改造成JS的配置，才能获取组件
export default [{
    path: '/',
    component: Index,
    exact: true,
    key: 'index'
}, {
    path: '/about',
    component: About,
    exact: true,
    key: 'about'
}, {
    path: '/user',
    component: User,
    exact: true,
    key: 'user'
}, {
    component: NoFound,
    key: 'noFound'
}]
