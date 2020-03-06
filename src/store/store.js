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
export default store;