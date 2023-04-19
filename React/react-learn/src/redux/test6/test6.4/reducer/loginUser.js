/* eslint {"import/no-anonymous-default-export":"off"} */
import { SETLOGINUSERTYPE } from "../action/loginUserAction"

const initialState = null
// 添加登录对象reducer
export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SETLOGINUSERTYPE:
            return payload
        default:
            return state
    }
}

