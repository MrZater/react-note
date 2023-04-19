// 用于创建仓库，并导出
import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import logger from "redux-logger"
import promise from "redux-promise"


import { fetchStudents } from "./action/student/searchResult"

const store = createStore(reducer,
    applyMiddleware(promise, logger)
)
store.dispatch(fetchStudents(store.getState().students.condition))

