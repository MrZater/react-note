import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, asyncIncrease, decrease, asyncDecrease } from '../redux/test8/action/counter'

function Counter(props) {
    return (
        <>
            <h1>{props.number}</h1>
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
        number:state.counter
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
// 通过connect生成一个高阶组件
const hoc =connect(mapStateToprops,mapDispatchToProps)
// 通过该高阶组件得到一个新组件
const HocCounter = hoc(Counter)

export default HocCounter
