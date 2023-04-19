import React, { useState, useLayoutEffect, useRef } from 'react'

export default function App() {
    const [n, setN] = useState(0)
    const h1Ref = useRef();
    useLayoutEffect(() => {
      // 不同于useEffect，useLayoutEffect会在页面渲染前执行
        h1Ref.current.innerText = Math.random().toFixed(2);
    })
    return (
        <div>
            <h1 ref={h1Ref}>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </div>
    )
}
