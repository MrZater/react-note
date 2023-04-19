export default {
    state: 0,
    reducers: {
        increase(state) {
            return state + 1
        },
        decrease(state) {
            return state - 1
        }
    },
    // 副作用
    effects: {
        /**
         * 
         * @param {*} action 
         * @param {*} param1 saga指令集 
         */
        * asyncIncrease(action, {
            put
        }) {
            yield delay(1000)
            // put相当于dispatch，内部调用内部的方法不需要加modal名
            yield put({
                type: 'increase'
            })
        },
        * asyncDecrease(action, {
            put
        }) {
            yield delay(1000)
            yield put({
                type: 'decrease'
            })
        }
    }
}

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}