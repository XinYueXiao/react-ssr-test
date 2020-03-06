/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 20:35:32
 */
//存储入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexRouter from './index'
const reducer = combineReducers({
    index: indexRouter
})
//创建store
const store = createStore(reducer, applyMiddleware(thunk))

//export default store;
export const getServerStore = () => {
    //服务端通过server的dispatch获取数据
    return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
    //通过window.__context获取数据
    const defaultState = window.__context ? window.__context : {}
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}