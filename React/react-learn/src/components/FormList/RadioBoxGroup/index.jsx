import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withDatasGroup from '../../../HOC/withDataGroup';
// 引入公共类型约束对象
import types from '../../../utils/commonTypes';
// 单个单选框组件
class Radio extends Component {
    // 属性验证
    static propTypes = {
        name: PropTypes.string.isRequired,
        info: types.singleData,
        onChange: PropTypes.func,
        value: PropTypes.string.isRequired
    }
    // 修改事件
    handleChange = (e) => {
        // 调用onChange事件
        this.props.onChange && this.props.onChange(e.target.value)
    }
    render() {
        return (
            <label key={this.props.info.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value === this.props.info.value}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        )
    }
}
// 一组单选框
// 将单个单选框组件用withDataGroup高阶组件进行处理,生成单选框集合,并导出
export default withDatasGroup(Radio)