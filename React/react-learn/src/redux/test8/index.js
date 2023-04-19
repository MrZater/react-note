// 用于创建仓库，并导出
import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"



import { increase, decrease, asyncIncrease, asyncDecrease } from "./action/counter"
import { fetchStudents } from './action/student/searchResult'
import {composeWithDevTools} from 'redux-devtools-extension'




const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

// 使用中间件
const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(sagaMid, logger))
)
// 运行saga，传入配置
sagaMid.run(rootSaga); //启动saga任务

export default store;






window.fetchStudents = function () {
    store.dispatch(fetchStudents());
}

window.increase = function () {
    store.dispatch(increase());
}

window.decrease = function () {
    store.dispatch(decrease());
}

window.asyncIncrease = function () {
    store.dispatch(asyncIncrease());
}

window.asyncDecrease = function () {
    store.dispatch(asyncDecrease());
}