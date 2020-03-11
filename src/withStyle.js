/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-11 11:56:32
 */
import React from 'react'

export default function withStyle(Comp, styles) {
    return function (props) {
        if (props.staticContext) {
            props.staticContext.css.push(styles._getCss())
        }
        return (
            <Comp {...props} />
        )
    }
}
