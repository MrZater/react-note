import React from 'react'
import { connect } from 'dva'
import { useRef } from 'react'

function Counter(props) {
    const iptRef = useRef()
    function handleAdd() {
        const num = parseInt(iptRef.current.value)
        props.onAdd(num)
    }
    return (
        <>
            <p>{props.count}</p>
            <button onClick={props.onIncrease}>增加</button>
            <button onClick={props.onDecrease}>减少</button>
            <button onClick={props.onAsyncIncrease}>异步增加</button>
            <button onClick={props.onAsyncDecrease}>异步减少</button>
            <input ref={iptRef} type="number" />
            <button onClick={handleAdd}>添加</button>
        </>
    )
}
let mapStateToProps = state => {
    return {
        count: state.counter
    }
}
let mapDispatchToPorps = dispatch => {
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
        onAdd(num) {
            dispatch({
                type: 'counter/add',
                payload: num
            })
        },
        onAsyncIncrease() {
            dispatch({
                type: 'counter/asyncIncrease'
            })
        },
        onAsyncDecrease() {
            dispatch({
                type: 'counter/asyncDecrease'
            })
        },
    }
}


const HocCounter = connect(mapStateToProps, mapDispatchToPorps)(Counter)
export default HocCounter