import React, { useState, useRef, useEffect } from 'react'

function App() {
    const [n, setN] = useState(4)
    // 保存ref，防止函数组件在多次渲染时ref会发生多次变化，出现效率问题
    const nRef = useRef(n)
    // 可用useRef的唯一性，保存常量，在副作用函数中使用计时器
    const divRef = useRef()
    useEffect(() => {
        const timer = setInterval(() => {
            nRef.current--
            setN(nRef.current)
            if (nRef.current === 0) {
                clearInterval(timer)
            }
        }, 1000);
        return () => {
            setInterval(timer)
        }
    }, [])
    return (
        <div ref={divRef}>{n}</div>
    )
}

export default App