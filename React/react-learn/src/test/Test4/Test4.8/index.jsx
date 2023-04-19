import React, { PureComponent, useState, useCallback } from 'react'
class A extends PureComponent {
    render() {
        console.log('Render A');
        return (
            <>
                a:{this.props.a}
            </>
        )
    }
}



function App() {
    console.log('Render App');
    const [a, setA] = useState(3)
    const [b, setB] = useState(123)
    // 使用useCallback保存点击函数的地址，使每次函数组件渲染时传递给子组件的函数指向同一地址
    const handleClick = useCallback(
        () => {
            setA(a + 1)
        },
        [],
    )

    return (
        <>
            <A a={a} ></A>
            <button onClick={handleClick}>a+1</button>
            <input type="number" value={b} onChange={
                (e) => {
                    setB(e.target.value)
                }
            } />
        </>
    )
}

export default App
