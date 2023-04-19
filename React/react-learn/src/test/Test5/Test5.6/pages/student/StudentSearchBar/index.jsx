import React, { Component } from 'react'

export default class StudentSearchBar extends Component {

    constructor(props) {
        super(props);
        // 默认参数
        const def = {
            key: "",
            sex: -1
        };
        // 初始化状态
        this.state = Object.assign({}, def, this.props.defaultValue);
    }

    // 单选框选中事件
    handleRadioChange = e => {
        this.setState({
            sex: +e.target.value
        })
    }
    // 点击搜索按钮，调用属性中的onsearch函数，抛出数据
    handleSearch = () => {
        //抛出事件
        if(this.props.onSearch){
            this.props.onSearch(this.state);
        }
    }

    render() {
        return (
            <div>
                关键字：
                <input type="text" value={this.state.key}
                // 关键字输入框修改
                    onChange={e => this.setState({ key: e.target.value })}
                />
                性别：
                <label><input checked={this.state.sex === -1} type="radio" name="sex" value={-1} onChange={this.handleRadioChange} />不限</label>
                <label><input checked={this.state.sex === 0} type="radio" name="sex" value={0} onChange={this.handleRadioChange} />男</label>
                <label><input checked={this.state.sex === 1} type="radio" name="sex" value={1} onChange={this.handleRadioChange} />女</label>
                <button onClick={this.handleSearch}>查询</button>
            </div>
        )
    }
}
