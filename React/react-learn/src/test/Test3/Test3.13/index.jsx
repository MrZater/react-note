import React from 'react'
// 导入错误边界组件
import ErrorBound from "./ErrorBound"

function Comp1() {
    return <div style={{
        width: "90%",
        height: 500,
        border: "2px solid"
    }}>
        <h1>Comp1</h1>
        <Comp2 />
    </div>
}


function Comp2() {
    let arr = ''
    let spans = arr.map(item => <span>item</span>)
    return <div style={{
        width: "70%",
        height: "70%",
        border: "2px solid"
    }}>
        <h1>Comp2</h1>
        {spans}
    </div>
}

function Comp3() {
    return <div style={{
        width: "90%",
        height: 500,
        border: "2px solid"
    }}>
        <h1>Comp3</h1>
    </div>
}

export default function App() {
    return <div>
        {/* 使用ErrorBound错误边界组件捕获子组件及该组件自身的错误 */}
        <ErrorBound>
            <Comp1 />
        </ErrorBound>
        <Comp3 />
    </div>
}
