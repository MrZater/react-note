// 用于创建仓库，并导出
import {
    createStore,
    applyMiddleware
} from "redux"
import reducer from "./reducer"
import logger from "redux-logger"
import thunk from "redux-thunk"

import {
    change
} from "./action/student/searchCondition"
import {
    fetchStudents
} from "./action/student/searchResult"
const store = createStore(reducer,
    // 使用中间件
    applyMiddleware(thunk, logger)
)

// 改变查询条件
store.dispatch(change({
    key: "abc",
    page: 2
}))
// 获取学生列表和总数
store.dispatch(fetchStudents())