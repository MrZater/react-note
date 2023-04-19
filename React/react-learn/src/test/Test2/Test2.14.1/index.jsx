import React, { Component } from 'react'
import NumberInput from '../../components/NumberInput'

export default class App extends Component {
    state = {
        val: '123',
        checked: true,
        loves: ['足球', '篮球', '游泳', '排球', '滑板'],
        chooseLoves: ['足球', '滑板'],
        chooseone: '足球',
        selVal: 'beijing'
    }
    // 输入框修改事件
    handleInputChange = (e) => {
        this.setState({
            val: e.target.value,
        })

    }
    // 选择框修改事件
    handleCheckChange = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }
    handleClick = () => {
        console.log(this.state.val);
    }
    handleCheckesChange = (e, item) => {
        if (!e.target.checked) {
            this.setState({
                chooseLoves: this.state.chooseLoves.filter(love => love != item)
            })
        } else {
            this.setState({
                chooseLoves: [...this.state.chooseLoves, item]
            })
        }
    }
    handleCheckOneInput = (e, item) => {
        if (e.target.checked) {
            this.setState({
                chooseone: item
            })
        } else {
            this.setState({
                chooseone: ''
            })
        }
    }
    handleSelectChange = (e) => {
        this.setState({
            selVal: e.target.value
        })
    }
    render() {
        let checkboxes = this.state.loves.map(item => {
            return (
                <label key={item}>
                    <input type='checkbox' checked={this.state.chooseLoves.includes(item)} onChange={(event) => this.handleCheckesChange(event, item)} ></input>
                    {item}
                </label>)
        })
        let checkonebox = this.state.loves.map(item => {
            return (
                <label key={item}>
                    <input type='checkbox' checked={this.state.chooseone === item} onChange={(event) => this.handleCheckOneInput(event, item)}></input>
                    {item}
                </label>
            )
        })
        return (
            <div>
                <div>
                    <span>输入框</span>
                    {/* 默认情况下为非受控组件 */}
                    <input type="text" value={this.state.val} onChange={this.handleInputChange} />
                    <button onClick={this.handleClick}>点击获取文本框的值</button>
                </div>
                <div>
                    <span>数字输入框</span>
                    {/* 数字输入框 */}
                    <NumberInput></NumberInput>
                </div>
                <div>
                    <span>选择框</span>
                    {/* 选择框 */}
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckChange} />
                </div>
                <div>
                    {/* 多选框 */}
                    <span>多选框</span>
                    {checkboxes}
                    <button onClick={() => {
                        console.log(this.state.chooseLoves)
                    }}>获取选中的值</button>
                </div>
                <div>
                    {/* 单选框 */}
                    <span>单选框</span>
                    {checkonebox}
                    <button onClick={() => {
                        console.log(this.state.chooseone)
                    }}>获取选中的值</button>
                </div>
                <div>
                    {/* 下拉列表 */}
                    <span>下拉列表</span>
                    <select value={this.state.selVal} onChange={this.handleSelectChange} >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                        <option value="shenzhen">深圳</option>
                        <option value="wuhan">武汉</option>
                        <option value="nanjing">南京</option>
                    </select>
                </div>
            </div>
        )
    }
}
