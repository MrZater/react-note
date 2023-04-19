import React from 'react'
import { connect } from 'dva'
import counterStyle from './Counter.less'

function Counter(props) {
    return (
        <>
            <h1 className={counterStyle.counter}>{props.count}</h1>
            <p>
                <button onClick={props.onAsyncIncrease}>异步加</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onAsyncDecrease}>异步减</button>
            </p>
        </>
    )
}

function mapStateToProps(state) {
    return {
        count: state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncrease() {
            dispatch({
                type: 'counter/increase'
            })
        },
        onDecrease() {
            dispatch({
                type: 'counter/decrease'
            })
        },
        onAsyncDecrease() {
            dispatch({
                type: 'counter/asyncDecrease'
            })
        },
        onAsyncIncrease() {
            dispatch({
                type: 'counter/asyncIncrease'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)