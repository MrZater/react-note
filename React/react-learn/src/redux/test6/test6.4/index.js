
import { createStore } from "redux";
import reducer from "./reducer"
import { createAddUserAction } from "./action/usersAction"
import {createSetLoginUserAction} from './action/loginUserAction'
import uuid from 'uuid'
// 绑定reducer
const store = createStore(reducer);


console.log(store.getState());

store.dispatch(createAddUserAction({
    id: uuid(),
    name: "abc",
    age: 10
}));
store.dispatch(createSetLoginUserAction('abc'))

console.log(store.getState());


















// const a = {
//     a: 1,
//     b: 2
// }
// const b = {
//     a: 3,
//     c: 2
// }
// for (const key in a) {
//   console.log(key in b)
// }