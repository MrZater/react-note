// 用于创建仓库，并导出
import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"



import { increase, decrease, asyncIncrease, autoIncrease, stopAutoIncrease, asyncDecrease } from "./action/counter"
import { fetchStudents } from './action/student/searchResult'







const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

const store = createStore(reducer,
    applyMiddleware(sagaMid, logger)
)

sagaMid.run(rootSaga); //启动saga任务
export default store


window.autoIncrease = function () {
    store.dispatch(autoIncrease())
}

window.stopAutoIncrease = function () {
    store.dispatch(stopAutoIncrease())
}

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