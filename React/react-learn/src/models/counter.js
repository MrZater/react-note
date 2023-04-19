export default {
    // 状态名
    namespace: 'counter',
    // 状态值
    state: 10,
    // reducers
    reducers: {
        increase(state) {
            return state + 1
        },
        decrease(state) {
            return state - 1
        },
        add(state, {
            payload
        }) {
            return state + payload
        }
    },
    // 副作用操作 （saga）
    effects: {
        * asyncIncrease(action, saga) {
            yield saga.call(delay, 1000)
            yield saga.put({
                type: 'increase'
            })
        },
        * asyncDecrease(action, saga) {
            yield saga.call(delay, 1000)
            yield saga.put({
                type: 'decrease'
            })
        }
    },
    // 只在启动时运行一次，一般用来监听事件
    subscriptions: {
        handleResize({
            dispatch,
            history
        }) {
            window.onresize = () => {
                dispatch({
                    type: 'increase'
                })
            }
        },
        handleListen({
            dispatch,
            history
        }) {
            let lock = true
            history.listen(() => {
                if (!lock) {
                    dispatch({
                        type: 'decrease'
                    })
                }
                lock = false

            })
        }
    }
}





// 延迟函数，返回一个promise
function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}