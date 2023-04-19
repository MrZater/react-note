import React, { Component } from 'react'
import PropTypes from 'prop-types';
// 引入公共类型约束对象
import types from '../../../utils/commonTypes';
import withDatasGroup from '../../../HOC/withDataGroup';
// 下拉框中的单个option组件
class option extends Component {
    // 属性验证
    static defaultProps = {
        info: types.singleData
    }
    render() {
        return (
            <option value={this.props.info.value} key={this.props.info.value}>
                {this.props.info.text}
            </option>
        )
    }
}
// 将option组件使用withDataGroup高阶组件进行处理，得到option集合
let OptGroup = withDatasGroup(option)

// select组件
// 由于Select组件外层还有一个select元素
// 所以将option集合再用一个组件进行处理
class Select extends Component {
    // 属性验证
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func

    }
    // 修改事件
    handleChange = (e) => {
        // 调用onChange事件
        this.props.onChange && this.props.onChange(e.target.value)
    }
    render() {
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                <OptGroup {...this.props}></OptGroup>
            </select>
        )
    }
}

export default Select

