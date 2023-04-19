import React, { Component } from 'react'
// 创建Test组件中的作用域数据
let ctx1 = React.createContext()
// 创建A组件中的作用域数据
let ctx2 = React.createContext()

export default class Test extends Component {
    // 状态初始化
    state = {
        a: 3,
        b: 4,
        onChangeA: (value) => {
            this.setState(
                {
                    a: value
                }
            )
        }
    }
    render() {
        return (
            // 创建作用域
            <ctx1.Provider value={{ ...this.state }}>
                <A></A>
            </ctx1.Provider>
        )
    }
}


class A extends Component {
    // 初始化状态
    state = {
        c: 5,
        d: 6,
        onChangeC: (newC) => {
            this.setState({
                c: newC
            })
        }
    }
    render() {
        return (
            // 创建作用域
            <ctx2.Provider value={{ ...this.state }}>
                Test的作用域：
                {/* 使用Test的作用域 */}
                <ctx1.Consumer>
                    {(value) => {
                        return (<>
                            a:{value.a}
                            b:{value.b}
                            <button onClick={() => {
                                // 调用Test作用域中的回调函数修改a值
                                value.onChangeA(value.a + 2)
                            }}>a + 2</button>

                        </>)
                    }}

                </ctx1.Consumer>
                <B></B>
            </ctx2.Provider>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                {/* 使用A的作用域 */}
                <ctx2.Consumer>

                    {(val) => {
                        return (
                            // 使用Test的作用域
                            <ctx1.Consumer>
                                {value => {
                                    return (<>
                                        <div>
                                            Test的a:{value.a}
                                            Test的b:{value.b}
                                        </div>
                                        <div>
                                            A的c:{val.c}
                                            A的d:{val.d}
                                        </div>
                                        <button onClick={
                                            () => {
                                                // 调用Test作用域中的回调函数修改a值
                                                value.onChangeA(value.a + 3)

                                            }
                                        }>a + 3</button>
                                        <button onClick={
                                            () => {
                                                // 调用A作用域中的回调函数修改c值
                                                val.onChangeC(val.c + 3)

                                            }
                                        }>c + 3</button>

                                    </>)
                                }}

                            </ctx1.Consumer>
                        )
                    }}
                </ctx2.Consumer>
            </div>
        )
    }
}


