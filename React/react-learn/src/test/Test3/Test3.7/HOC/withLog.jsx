import React, { Component, forwardRef } from 'react'

/**
 * 高阶函数 withLog
 * @param {*} Comp 传入参数：组件
 * @returns 
 */
export default function WithLog(Comp) {
    class LogWrapper extends Component {
        // 高阶组件中的处理

        componentDidMount = () => {
            console.log(`组件${Comp.name}已创建${new Date().getTime()}`);
        }
        componentWillUnmount() {
            console.log(`组件${Comp.name}已销毁${new Date().getTime()}`);
        }

        render() {
            // LogWrapper需要传入一个ref对象
            const { forwardRef, ...rest } = this.props

            return (
                // 将参数原封不动的传给组件
                // 将ref对象传递给低阶组件
                <Comp {...rest} ref={forwardRef}></Comp>
            )
        }
    }
    // 使用React.forwardRef对传过来的ref进行处理，并返回
    return React.forwardRef((props, ref) => {
        // 将ref传给高阶组件
        return <LogWrapper {...props} forwardRef={ref}></LogWrapper>
    })
}

