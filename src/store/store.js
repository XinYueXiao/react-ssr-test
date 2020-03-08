/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 20:35:32
 */
//存储入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'
import axios from 'axios'
const serverAxios = axios.create({
    baseURL: 'http://localhost:9090/'
})
const clientAxios = axios.create({
    baseURL: '/'
})
const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})
//创建store
//const store = createStore(reducer, applyMiddleware(thunk))

//export default store;
export const getServerStore = () => {
    //服务端通过server的dispatch获取数据
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}
export const getClientStore = () => {
    //通过window.__context获取数据
    const defaultState = window.__context ? window.__context : {}
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}