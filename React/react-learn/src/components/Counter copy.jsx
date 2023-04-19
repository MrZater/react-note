import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../redux/test8'
import { increase, asyncIncrease, decrease, asyncDecrease } from '../redux/test8/action/counter'

function Counter(props) {
    return (
        <>
            <h1>{props.counter}</h1>
            <p>
                <button onClick={props.onAsyncIncrease}>异步加</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onAsyncDecrease}>异步减</button>
            </p>

        </>
    )
}
// 获取仓库中的数据
function mapStateToprops(state) {
    return {
        ...state
    }
}

// 映射处理函数，调用dispatch
function mapDispatchToProps(dispatch) {
    return {
        onAsyncIncrease() {
           dispatch(asyncIncrease())
        },
        onIncrease() {
           dispatch(increase())
        },
        onDecrease() {
           dispatch(decrease())
        },
        onAsyncDecrease() {
           dispatch(asyncDecrease())
        },
    }
}

class CounterContainer extends Component {
    constructor(props) {
        super(props)
        // 初始化state
        this.state = mapStateToprops(store.getState())
        // 监听仓库变化，更新state
        store.subscribe(()=>{this.setState(mapStateToprops(store.getState()))})
    }

    render() {
        const events = mapDispatchToProps(store.dispatch)
        return (
            <Counter {...this.state} {...events} ></Counter>
        )
    }
}

export default CounterContainer
