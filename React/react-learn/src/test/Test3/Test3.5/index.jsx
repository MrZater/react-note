import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props);
        // 创建ref
        this.txt = React.createRef();
    }
    handleClick = () => {
        // 进行ref上的dom操作
        this.txt.focus();
    }
    render() {
        return (
            <div>
                {/* 绑定ref */}
                <input ref={(el) => { this.txt = el }} type="text" />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
