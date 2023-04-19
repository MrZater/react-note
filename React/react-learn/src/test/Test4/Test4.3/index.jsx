import React, { useState, useEffect } from 'react'

function A() {
    const [a, setA] = useState(0)
    const [, forceUpdate] = useState({})
    useEffect(() => {
        // 创建时运行
        // 若第二个参数不存在或第二个参数数组中包含的数据发生变化则运行
        // 第二个参数为空数组时，只在创建时运行，数据变化时不发生运行
        console.log('副作用函数');
        return () => {
            // 创建时不运行
            // 除了创建时，只要副作用函数运行，清理函数也运行
            // 组件销毁时运行
            console.log('清理函数');
        }
    }, [])

    return (
        <>
            <p>{a}</p>
            <button onClick={() => {
                setA(a + 1)
            }}>a + 1</button>
        </>
    )
}

function App() {
    const [visable, setVisable] = useState(true)
    return (
        <>
            <button onClick={() => {
                setVisable(!visable)
            }}>显示隐藏</button>
            {visable && <A></A>}
        </>
    )
}

export default App