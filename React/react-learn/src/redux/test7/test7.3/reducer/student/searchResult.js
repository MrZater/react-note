import {
    actionTypes
} from "../../action/student/searchResult"

// 默认状态
const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}

/**
 * 控制查询结果的reducer
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case actionTypes.setIsLoading:
            // 判断是否是设置loading
            return {
                ...state,
                isLoading: payload
            }

            case actionTypes.setStudentsAndTotal:
                // 判断是否是修改学生列表和总数
                return {
                    ...state,
                    ...payload
                }
                default:
                    return state;
    }
}