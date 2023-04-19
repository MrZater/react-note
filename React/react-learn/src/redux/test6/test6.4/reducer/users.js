/* eslint {"import/no-anonymous-default-export":"off"} */
import * as usersAction from "../action/usersAction"
import uuid from "uuid"

const initialState = [{
        id: uuid(),
        name: "用户1",
        age: 11
    },
    {
        id: uuid(),
        name: "用户2",
        age: 12
    }
];
// 操作用户reducer
export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case usersAction.ADDUSER:
            // 添加  返回的数据不能对原数据进行修改
            return [...state, payload];
        case usersAction.DELETEUSER:
            // 删除
            // 过滤
            return state.filter(it => it.id !== payload);
        case usersAction.UPDATEUSER:
            // 修改
            // 映射
            return state.map(it => it.id === payload.id ? {
                ...it,
                ...payload
            } : it);
        default:
            return state
    }
}