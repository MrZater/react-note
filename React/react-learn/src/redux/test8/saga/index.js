import { all } from "redux-saga/effects"
import counterTask from "./counterTask"
import studentTask from "./studentTask"
/**
* saga任务
*/
export default function* () {
    // 监听子模块
    yield all([counterTask(), studentTask()])
}
