/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 18:46:54
 */
import React from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'
import { Redirect } from 'react-router-dom'
function User(props) {
    return <Redirect to='/about' ></Redirect>

}
// const { userInfo } = props
// return (
//     <div>
//         <h1>{userInfo.isVip ? '尊敬的VIP客户' : ''}{userInfo.name}欢迎您</h1>
//     </div>
// )
// 3.1发起异步请求，获取数据
User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}
export default connect(
    state => ({
        userInfo: state.user.userInfo
    }),
    {
        getUserInfo
    }
)(User)
