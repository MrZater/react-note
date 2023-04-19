import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "./reducer"
import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"

// 中间件1
// 中间件是一个函数（传参：store），返回一个dispatch创建函数（传参：上一个中间件处理过的dispatch函数，一个函数，该函数返回一个函数会作为dispatch）
const logger1 = store => next => action => {
    console.log("中间件1")
    console.log("旧数据", store.getState());
    console.log("action", action);
    next(action);
    console.log("新数据", store.getState());
    console.log("")
}

// 中间件2
const logger2 = store => next => action => {
    console.log("中间件2")
    console.log("旧数据", store.getState());
    console.log("action", action);
    next(action);
    console.log("新数据", store.getState());
    console.log("")
}


// /**
//  * 一个中间件函数
//  * @param {*} store 
//  */
// function logger1(store) {
//     return function (next) {
//         //下面返回的函数，是最终要应用的dispatch
//         return function (action) {
//             console.log("中间件1")
//             console.log("旧数据", store.getState());
//             console.log("action", action);
//             next(action);
//             console.log("新数据", store.getState());
//             console.log("")
//         }
//     }
// }

// function logger2(store) {
//     return function (next) {
//         //下面返回的函数，是最终要应用的dispatch
//         return function (action) {
//             console.log("中间件2")
//             console.log("旧数据", store.getState());
//             console.log("action", action);
//             next(action);
//             console.log("新数据", store.getState());
//             console.log("")
//         }
//     }
// }

//应用中间件，方式1：
// const store = createStore(reducer, applyMiddleware(logger1, logger2));

//方式2：
const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

const actionCreators = {
    addUser: createAddUserAction,
    deleteUser: createDeleteUserAction
}

const actions = bindActionCreators(actionCreators, store.dispatch)

actions.addUser({ id: 3, name: "abc", age: 111 })
actions.deleteUser(3)