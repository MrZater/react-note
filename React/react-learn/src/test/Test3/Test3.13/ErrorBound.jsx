import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {

    state = {
        hasError: false
    }
    // 渲染前捕获错误，静态方法，将返回的对象设置成state
    static getDerivedStateFromError(error) {
        console.log("发生错误了");
        // 若发生错误，改变hasError的值
        return {
            hasError: true
        }
    }
    // render后触发的函数，主要用于记录错误信息，出现错误后可调用setState重新渲染页面
    componentDidCatch(error, info) {
        console.log("记录错误信息");
        this.setState({
            hasError: true
        })
    }



    render() {
        // 通过state中的hasError判断渲染
        if (this.state.hasError) {
            return <h1>出现错误了！</h1>
        }
        return this.props.children
    }
}
