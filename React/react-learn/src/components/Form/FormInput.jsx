import React, {
    Component
} from 'react'
import PropTypes from "prop-types"
import ctx from "./formContext"

//一定处于上下文中
export default class FormInput extends Component {

    // static contextType = ctx;

    static defaultProps = {
        type: "text"
    }

    static propTypes = {
        name: PropTypes.string.isRequired, //文本框的名称
        type: PropTypes.string.isRequired //文本框的类型
    }

    render() {
        return (
            <ctx.Consumer >
                {
                    (val) => {
                        return (
                            <>
                                <input
                                    // input绑定值
                                    value={val.formData[this.props.name] || ""}
                                    // 修改value事件，调用上下文中的回调函数
                                    onChange={e => {
                                        val.changeFormData(this.props.name, e.target.value)
                                    }}
                                    // input框类型
                                    type={
                                        this.props.type
                                    }
                                />
                            </>
                        )
                    }
                }
            </ctx.Consumer>

        )
    }
}