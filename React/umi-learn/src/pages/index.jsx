import React, { useEffect } from 'react'
import { getDvaApp } from 'umi'
import { connect } from 'dva'

function index(props) {
    return (
        <div>
            <h1>首页</h1>
            <h1>{props.counter}</h1>
            <button onClick={() => {
                props.onIncrease()
            }}>增加</button>
            <button onClick={()=>{
                props.history.push('/counter')
            }}>跳转至计数器</button>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        counter: state.counter,
    }
}
function mapDispatchToprops(dispatch) {
    return {
        onIncrease() {
            dispatch({
                type: 'counter/increase'
            })
        }
    }
}

const Home = connect(mapStateToProps, mapDispatchToprops)(index)
Home.wrappers = ['@/wrappers/HandleTitle.js']
Home.title = '首页'
export default Home
