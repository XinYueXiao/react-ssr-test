/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 18:46:54
 */

import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'

export default (<div>
    <Route path='/' exact component={Index}></Route>
    <Route path='/about' exact component={About}></Route>
</div>)
