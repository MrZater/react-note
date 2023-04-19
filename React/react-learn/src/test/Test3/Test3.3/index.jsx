import React, { Component } from 'react'
import { A, B } from './Comps'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'
// 对组件A使用高阶函数withLog处理得到高阶组件LogA
let LogA = withLog(A)
// 对组件B使用高阶函数withLog处理得到高阶组件LogB
let LogB = withLog(B)
// 对组件LogA使用高阶函数withLogin处理得到高阶组件LohinA
let LoginA = withLogin(LogA,' LogA')
// 对组件LogB使用高阶函数withLogin处理得到高阶组件LoginB
let LoginB = withLogin(LogB,' LogB')
export default class index extends Component {
    render() {
        return (
            <>
            <LoginB b={2} isLogin={false}></LoginB>
            <LoginA a={3} isLogin></LoginA>
            </>
        )
    }
}
