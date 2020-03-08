/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 22:07:57
 */
import React from 'react'
import { Link } from 'react-router-dom'
export default () => {
    return <div>
        <Link to='/'>首页 </Link>|
        <Link to='/about'> 关于</Link>
        <Link to='/user'> 用户</Link>
        <Link to='/asd'> 错误</Link>

    </div>
};