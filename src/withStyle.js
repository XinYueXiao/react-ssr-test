/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-11 11:56:32
 */
import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics';
function withStyle(Comp, styles) {
    function NewComp(props) {
        if (props.staticContext) {
            props.staticContext.css.push(styles._getCss())
        }
        return (
            <Comp {...props} />
        )
    }
    //合并静态方法(loadData的数据闪一下出现问题)
    //https://zh-hans.reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoistNonReactStatic(NewComp, Comp)
    return NewComp
}
export default withStyle