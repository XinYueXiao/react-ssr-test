/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 18:46:54
 */
import React, { useState } from 'react'
function Index() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>点击次数{count}</h1>
            <button onClick={() => setCount(count + 1)}>点击增加+1</button>
        </div>
    )
}
export default Index
