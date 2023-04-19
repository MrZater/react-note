import React, { Component } from 'react'

export default class Tick extends Component {
    // 初始化状态 写法一
    state = {
        left: this.props.num,
        n: 123
    }
    constructor(props) {
        super(props);
        // // 初始化状态 写法二
        // this.state = {
        //     left: this.props.num,
        // }
        this.timer = setInterval(() => {
            if (this.state.left === 0) {
                // 停止计时器
                clearInterval(this.timer)
                return
            }
            // 重新设置状态
            // setStats会重新渲染组件
            this.setState({
                // 修改stats对象的值，重新渲染
                left: this.state.left - 1
            })

        }, 1000);
    }
    render() {
        return (
            <>
                <h1>
                    倒计时：{this.state.left}
                </h1>
                <p>{this.state.n}</p>
            </>

        )
    }
}
