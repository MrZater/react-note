import { actionTypes } from "../../action/student/searchCondition"

// 默认状态
const initialState = {
    key: "",
    sex: -1,
    page: 1,
    limit: 10
}
/**
 * 控制查询条件数据的reducer
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = initialState, { type, payload }) {
    switch (type) {
        // 判断是否是查询条件改变
        case actionTypes.change:
            return {
                // 解构，覆盖
                ...state,
                ...payload
            };
        default:
            return state;
    }
}