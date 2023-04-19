import React, { Component } from 'react'
import types from '../utils/commonTypes'
// 实现根据数据渲染出的一组表单组件
export default function withDatasGroup(Comp) {
    return class DatasGroupWrapper extends Component {
        static defaultProps = {
            datas: [],
        }
        static propTypes = {
            datas: types.groupDatas
        }
        render() {
            // 映射生成单个组件的集合，并将所有的原有属性传进去，再将每一项的info传进去
            let comps = this.props.datas.map(item => {
                return <Comp key={item.value} {...this.props} info={item}></Comp>
            })
            return (
                <>
                    {comps}
                </>
            )
        }
    }
}