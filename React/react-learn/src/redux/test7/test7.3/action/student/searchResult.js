import {
    searchStudents
} from "../../../../../services/student"

export const actionTypes = {
    //设置学生查询结果数组和总数
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    // 设置loading
    setIsLoading: Symbol("setIsLoading")
}

/**
 * action creator
 * 得到一个设置学生数组和总数的action
 * @param {*} arr 
 * @param {*} total 
 */
function setStudentsAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

function isEqual(obj1, obj2) {
    const arr = Object.keys(obj1)
    return Object.keys(obj2).every(item => {
        return arr.includes(item)
    })
}
console.log(isEqual({
    a: 1,
    c: 2
}, {
    a: 1,
    c: 3
}))



/**
 * action creator
 * 得到一个设置是否正在加载中的action
 * @param {*} isLoading 
 */
function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

/**
 * 利用前两个action创建函数，得到一个待有副作用的可被thunk处理的函数
 * 根据当前仓库中的查询条件，查询学生
 */
export function fetchStudents() {
    return async function (dispatch, getState) {
        // 修改loading
        dispatch(setIsLoading(true));
        // 通过传参中的getState，得到查询条件
        const condition = getState().students.condition;
        // 通过查询条件发送请求
        const resp = await searchStudents(condition)
        // 修改学生列表和总数
        dispatch(setStudentsAndTotal(resp.datas, resp.cont));
        // 修改loading
        dispatch(setIsLoading(false));
    }
}