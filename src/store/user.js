/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-03-06 20:35:21
 */
import axios from 'axios'
//首页逻辑
const USER_INFO = 'INDEX/USER_INFO'
//actionCreator
const changeUserInfo = data => ({
    type: USER_INFO,
    data
})

export const getUserInfo = server => {
    console.log("getUserInfo", getUserInfo)
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:9090/api/user/info')
            .then(res => {
                const { data } = res.data
                console.log("用户data--", data)
                dispatch(changeUserInfo(data))
            })
    }
}
const defaultState = {
    userInfo: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_INFO:

            const newState = {
                ...state,
                userInfo: action.data
            }
            return newState
        default:
            return state
    }
}
