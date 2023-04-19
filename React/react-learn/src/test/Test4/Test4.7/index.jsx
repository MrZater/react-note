import React, { Component, useContext, createContext } from 'react'

const ctx = createContext()


function A() {
    // 使用useContext HOOk获取上下文数据
    const cVal = useContext(ctx)
    return (
        <div>
            <p>a:{cVal.a}</p>
            <p> b:{cVal.b}</p>
        </div>
    )
}

export default class index extends Component {
    state = {
        a: 1,
        b: 2
    }
    render() {
        return (
            <ctx.Provider value={{
                a: this.state.a,
                b: this.state.b
            }}>
                <A></A>
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>a+1</button>
                <button onClick={() => {
                    this.setState({
                        b: this.state.b + 1
                    })
                }}>b+1</button>
            </ctx.Provider>
        )
    }
}
