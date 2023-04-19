import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
    state = {
        n: 1
    }
    // 从属性中获取新的状态
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state);
        // 返回null，不改变当前状态
        // 返回对象,用该对象替换之前的状态
        return null;
    }
    // 获取更新前的快照
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('getSnapshotBeforeUpdate',prevProps, prevState);
        return 123
    }
    // 挂在完成后
    componentDidUpdate = (prevProps, prevState,span) => {
        console.log('componentDidUpdate',prevProps, prevState,span);
    }

    render() {
        return (
            <div>
                <h1>新版生命周期组件</h1>
                <h1>{this.state.n}</h1>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }} >n+1</button>
            </div>
        )
    }
}
