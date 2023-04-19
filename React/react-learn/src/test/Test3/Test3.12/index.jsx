import React from 'react'
import ReactDOM from "react-dom"

// 组件A
function ChildA() {
    // 使用ReactDOM.createPortal，将该组件挂载到另一个dom对象上
    // 参数一：组件A的React对象
    // 参数二：要挂在的DOM对象
    // 挂在后React组件结构不变 index ==> A ==> B 
    // 真实DOM中A及A的子组件会挂载到.modal上
    return ReactDOM.createPortal((<div className="child-a" style={{
        marginTop: 200
    }}>
        <h1>ChildA</h1>
        <ChildB />
    </div>), document.querySelector(".modal"));
}

// 组件B
function ChildB() {
    return <div className="child-b">
        <h1>ChildB</h1>
    </div>
}

export default function index() {
    return (
        <div className="app" onClick={e => {
            console.log("App被点击了", e.target)
        }}>
            <h1>App</h1>
            <ChildA />
        </div>
    )
}
