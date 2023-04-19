import React, { Component } from 'react'

/**
 * 高阶函数 withLog
 * @param {*} Comp 传入参数：组件
 * @returns 
 */
export default function WithLog(Comp) {
    return class LogWrapper extends Component {
        // 高阶组件中的处理

        componentDidMount = () => {
            console.log(`组件${Comp.name}已创建${new Date().getTime()}`);
        }
        componentWillUnmount() {
            console.log(`组件${Comp.name}已销毁${new Date().getTime()}`);
        }

        render() {
            return (
                // 将参数原封不动的传给组件
                <Comp {...this.props}></Comp>
            )
        }
    }
}

