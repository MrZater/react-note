import React, { Component } from 'react'

export default class OldLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            n: 0
        }
        console.log('旧版生命周期组件诞生了');
    }
    // 即将挂载
    componentWillMount = () => {
        console.log('componentWillMount', '组件即将被挂载');
    }
    // 渲染
    render() {
        console.log('render', '渲染，返回的react对象将被挂载到虚拟DOM中')
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n：{this.props.n}</h2>
                <h2>状态n：{this.state.n}</h2>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>状态 n + 1</button>
            </div>
        )
    }
    // 挂在完成
    componentDidMount = () => {
        console.log('componentDidMount', '已完成挂载');
    }
    // 即将接收新值props
    componentWillReceiveProps = (nextProps) => {
        console.log('componentWillReceiveProps', '接收新值props', this.props, nextProps);
    }
    // 数据更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', '是否应该重新渲染', this.props, nextProps, this.state, nextState);
        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            return false
        } else {
            return true
        }
    }
    // 组件即将重新渲染
    componentWillUnmount() {
        console.log('componentWillUnmount','组件即将被重新渲染')
    }
    // 组件已完成重新渲染
    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate','组件已重新渲染',prevProps,prevState)
    } 
    // 组件销毁
    componentWillUnmount() {
        console.log('componentWillUnmount','组件被销毁');
     }
}
