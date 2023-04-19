import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 引入公共类型约束对象
import types from '../../../utils/commonTypes';

import withDatasGroup from '../../../HOC/withDataGroup';
// 单个多选框组件
class CheckBox extends Component {
    // 属性验证
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        info: types.singleData,
        chooseDatas: types.chooseDatas
    }
    // 修改事件
    handleChange=(e)=>{
        let newArr = []
        // 判断是选中还是取消选中
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        } else {
            newArr = this.props.chooseDatas.filter(item => item !== e.target.value)
        }
        // 调用onChange事件
        this.props.onChange && this.props.onChange(newArr)
    }
    render(){
        return (
            <label >
                    <input
                        type="checkbox"
                        name={this.props.name}
                        value={this.props.info.value}
                        checked={this.props.chooseDatas.includes(this.props.info.value)}
                        onChange={this.handleChange}
                    />
                    {this.props.info.text}
                </label>
        )
    }
}


// 一组多选框
// 将单个多选框组件用withDataGroup高阶组件进行处理,生成多选框集合,并导出
export default withDatasGroup(CheckBox)