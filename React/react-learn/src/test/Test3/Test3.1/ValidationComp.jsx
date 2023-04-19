import React, { Component } from 'react'
// 导入库 PropTypes
import PropTypes from 'prop-types'

export default class ValidationComp extends Component {
    static defaultProps = {
        a: 1,
        b: false
    }
    static propTypes = {
        // 表示属性a必须要是一个数字，并且必传
        a: PropTypes.number.isRequired,
        // 表示属性b必须要是一个布尔类型，并且必传
        b: PropTypes.bool.isRequired,
        // 表示onClick必需是一个函数
        onClick: PropTypes.func,
        // 表示属性c可以是任何类型
        c: PropTypes.any,
        // 表示属性d必须是一个可渲染类型，而且必填
        d: PropTypes.node.isRequired,
        // 表示属性e必须是一个React元素
        e: PropTypes.element,
        // 表示f必须是一个组件的构造函数或类
        f: PropTypes.elementType,
        // sex属性必须是0和1中的一个
        sex: PropTypes.oneOf([0, 1]),
        // 表示属性g必须是一个布尔类型数组
        g: PropTypes.arrayOf(PropTypes.bool),
        // 表示属性h是一个对象，且每一个属性值必须是数字类型
        h: PropTypes.objectOf(PropTypes.number),
        // 表示属性i必须是一个对象，且对该属性进行深度验证
        i: PropTypes.shape({
            name: PropTypes.string,
            sex: PropTypes.bool,
            address: PropTypes.shape({
                city: PropTypes.string
            })
        }),
        // 表示属性j必须是一个对象，有且只有a，b这两个属性，精确匹配
        j: PropTypes.exact({
            a: PropTypes.string,
            b: PropTypes.bool
        }),
        // 表示属性k只可以是数组或者是字符串类型
        k: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
        // 对属性l进行函数精确验证
        l: function (props, propName, componentName) {
            const val = props[propName]
            // 必填
            if (val === undefined || val === null) {
                return new Error('invalid prop ' + propName + ' in ' + componentName+','+propName+' is required')
            }
            // 该属性必须是一个数字，并且取值范围是0~100
            if (typeof val!=='number'){
                return new Error(`invalid prop ${propName} is not anumber`)
            }
            if(val<=0||val>=100){
                return new Error(`invalid prop ${propName} in ${componentName} , ${propName} must is between 0 and 100`)
            }
        }

    }
    render() {
        return (
            <div>ValidationComp</div>
        )
    }
}
