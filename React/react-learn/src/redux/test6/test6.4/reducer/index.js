/* eslint {"import/no-anonymous-default-export":"off"} */
// 合并reducer
import loginUserReducer from "./loginUser"
import usersReducer from './users'
// 合并reducer方法，返回一个函数
// import { combineReducers } from "redux"

// 最终reducer
export default (state = {}, action) => {
    // 利用reducer在不传action或传入的action无法匹配时直接返回参数state的特性
    // 只改变active对应的state，其他state只会以原状态返回
    const newState = {
        loginUser: loginUserReducer(state.loginUser, action),
        users: usersReducer(state.users, action)
    };
    return newState;
}
// 传入需要一个对象，key为state的名字，value为该state对应的reducer
// export default combineReducers({
//     loginUser: loginUserReducer,
//     users: usersReducer
// })