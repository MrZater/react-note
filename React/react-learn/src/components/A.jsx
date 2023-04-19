import React, { Component } from 'react'

export default class A extends Component {
    // 设置状态
    state = {
        n: 123
    }
    constructor(props) {
        super(props);
        setInterval(() => {
            // 修改状态，重新渲染
            this.setState({
                // 修改状态
                n: this.state.n - 1
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <B n={this.state.n}></B>
            </div>
        )
    }
}
function B(props) {
    return (
        <div>
            组件B：{props.n}
            <C n={props.n}></C>
        </div>
    )
}
function C(props) {
    return (
        <div>
            组件C：{props.n}
        </div>
    )
}