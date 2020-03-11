/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 18:46:54
 */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'
import styles from './Index.css'
import withStyle from '../withStyle'
function Index(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        //客户端渲染
        if (!props.list.length) {
            props.getIndexList()
        }
    }, [])
    return (
        <div>
            <h1>点击次数{count}</h1>
            <button onClick={() => setCount(count + 1)}>点击增加+1</button>
            <hr />
            <h1 className={styles.title}>技能列表</h1>
            <ul>
                {props.list.map(one => <li key={one.id}>
                    {one.name}</li>)}
            </ul>
        </div>
    )
}
// 3.1发起异步请求，获取数据
Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}
export default connect(
    state => ({ list: state.index.list }),
    { getIndexList }
)(withStyle(Index, styles))
