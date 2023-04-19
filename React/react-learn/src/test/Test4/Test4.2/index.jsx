import React, { useState } from 'react'

function App() {
    // 创建状态a
    const [a, setA] = useState(0)
    // 创建状态b
    const [b, setB] = useState(4)
    // 创建状态visable
    const [visable, setVisable] = useState(true)
    return (
        <>
            <div style={{
                display: visable ? 'block' : 'none'
            }}>
                <p> a:{a} </p>
                <p> b:{b} </p>

                <button onClick={() => {
                    // 修改状态a
                    setA(a + 1)
                    // 修改状态b
                    setB(b + 1)
                }}>a + 1 & b - 1 </button>

                <button onClick={() => {
                    // 利用回调的方式多次改变同一个的状态
                    setA(a => a - 1)
                    setA(a => a - 1)
                }}>a - 2</button>

            </div>
            <button onClick={() => {
                setVisable(!visable)
            }}>显示/隐藏</button>
        </>
    )
}

export default App
