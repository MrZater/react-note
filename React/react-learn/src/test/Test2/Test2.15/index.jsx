import React, { Component } from 'react'
import CheckBoxGroup from '../../components/Form/CheckBoxGroup'
import RadioBoxGroup from '../../components/Form/RadioBoxGroup'
import SelectBoxGroup from '../../components/Form/SelectBoxGroup'
export default class index extends Component {
    state = {
        datas: [],
        name: 'word',
        chooseDatas: [],
        value: ''
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                datas: [
                    { value: 'a', text: '篮球' },
                    { value: 'b', text: '足球' },
                    { value: 'c', text: '排球' },
                    { value: 'd', text: '游泳' },
                    { value: 'e', text: '射击' },
                ],
                chooseDatas: ['a', 'c'],
                value: 'c'
            })
        }, 500);
    }

    render() {
        return (
            <div>

                <div>
                    {/* 多选框 */}
                    <CheckBoxGroup
                        {...this.state}
                        onChange={(newArr) => {
                            this.setState({
                                chooseDatas: newArr
                            })
                        }}
                    ></CheckBoxGroup>
                </div>
                <div>
                    {/* 单选框 */}
                    <RadioBoxGroup
                        {...this.state}
                        onChange={(newVal) => {
                            this.setState({
                                value: newVal
                            })
                        }}
                    ></RadioBoxGroup>
                </div>
                <div>
                    {/* 下拉框 */}
                    <SelectBoxGroup
                        {...this.state}
                        onChange={(newVal) => {
                            this.setState({
                                value: newVal
                            })
                        }}
                    ></SelectBoxGroup>
                </div>
            </div>
        )
    }
}
