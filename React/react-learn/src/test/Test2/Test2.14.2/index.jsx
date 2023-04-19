import React, { Component } from 'react'

export default class Form extends Component {
    // 状态初始化
    state = {
        loginId: '',
        password: '',
        sex: 'male',
        chooseLoves: ['basketball', 'swimming', 'music'],
        loves: [{
            value: 'football',
            text: '足球'
        }, {
            value: 'basketball',
            text: '篮球'
        }, {
            value: 'swimming',
            text: '游泳'
        }, {
            value: 'music',
            text: '音乐'
        }, { 
            value: 'other',
            text: '其他'
        }],
        city: 'beijing'
    }
    // 受控组件数据变化事件
    handleInputChange = (e) => {
        // 获取表单元素value
        let val = e.target.value
        // 获取表单元素name
        let name = e.target.name
        // 判断是否是多选框元素
        // 是多选框元素
        if (e.target.type === 'checkbox') {
            // 判断将要进入的checked值
            // 选中状态
            if (e.target.checked) {
                // 加入该项value
                val = [...this.state.chooseLoves, val]
            } else {
                // 非选中状态
                // 过滤掉该项value
                val = this.state.chooseLoves.filter(item => {
                    return item != val
                })
            }
        }
        // 修改状态，重新渲染
        this.setState({
            [name]: val
        })

    }
    // 生成多选框react元素对象
    getLoveCheckBoxes = () => {
        let bs = this.state.loves.map(item => {
            return (
                <label key={item.value}>
                    <input
                        // 多选框
                        type="checkbox"
                        // 属性
                        name='chooseLoves'
                        //  是否选中
                        checked={this.state.chooseLoves.includes(item.value)}
                        // 该项value
                        value={item.value}
                        // 改变事件
                        onChange={this.handleInputChange} />
                    {item.text}
                </label>
            )
        })
        return bs
    }
    render() {
        const bs = this.getLoveCheckBoxes()
        return (
            <div>
                <p>
                    {/* loginId */}
                    <input name='loginId' type="text" value={this.state.loginId} onChange={this.handleInputChange} />
                </p>
                <p>
                    {/* password */}
                    <input name='password' type="text" value={this.state.password} onChange={this.handleInputChange} />
                </p>
                <p>
                    {/* sex */}
                    <label htmlFor="">
                        <input type="radio" name='sex' checked={this.state.sex === 'male'} value='male' onChange={this.handleInputChange} />男
                    </label>
                    <label htmlFor="">
                        <input type="radio" name='sex' checked={this.state.sex === 'female'} value='female' onChange={this.handleInputChange} />女
                    </label>
                </p>
                <p>
                    {/* city */}
                    <select name="city" id="" value={this.state.city} onChange={this.handleInputChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shenzhen">深圳</option>
                    </select>
                </p>
                <p>
                    {/* chooseloves */}
                    {bs}
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>获取数据</button>
                </p>
            </div>
        )
    }
}
