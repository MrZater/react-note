import {
    actionTypes,
    setIsLoading,
    setStudentsAndTotal
} from "../action/student/searchResult"
import {
    takeEvery,
    put,
    call,
    select
} from "redux-saga/effects"
import {
    searchStudents
} from "../../../services/student"

function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true))
    // 获取查询条件
    const condition = yield select(state => state.students.condition);
    //使用call指令，按照当前仓库中的条件
    try {
        // 获取学生数据
        const resp = yield call(searchStudents, condition)
        // 保存到仓库
        yield put(setStudentsAndTotal(resp.datas, resp.cont))
    } catch (err) {
        console.log(err.message);
    } finally {
        yield put(setIsLoading(false));
    }
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}