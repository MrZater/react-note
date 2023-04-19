import React, { Component } from 'react'
import { Provider } from "./formContext";
// 导入输入框组件
import FormInput from "./FormInput"
// 属性验证插件
import PropTypes from "prop-types"
// 导入按钮组件
import FormButton from "./FormButton"

export default class Form extends Component {

    state = {
        formData: {}, //表单数据对象
        //修改formData中的数据
        changeFormData: (name, val) => {
            // 修改状态
            this.setState({
                formData: {
                    // 结构属性
                    ...this.state.formData,
                    // 修改属性值
                    [name]: val
                }
            })
        },
        // form表单提交事件（供button使用）
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    render() {
        return (
            <div>
                {/* 创建上下文 */}
                <Provider value={this.state}>
                    {/* 渲染子节点 */}
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}
// 将子组件放在该组件对象下的静态属性中
Form.Input = FormInput
Form.Button = FormButton