import React, { Component } from 'react'
import CheckBoxGroup from '../../components/Form/CheckBoxGroup'
import RadioBoxGroup from '../../components/Form/RadioBoxGroup'
import SelectBoxGroup from '../../components/Form/SelectBoxGroup'
import ThreeLayout from '../../components/ThreeLayout'
export default class index extends Component {
    state = {
        chooseDatas: ['a'],
        datas: [
            { value: 'a', text: 'A' },
            { value: 'b', text: 'B' },
            { value: 'c', text: 'C' },
            { value: 'd', text: 'D' },
            { value: 'e', text: 'E' },
        ],
        name: 'id',
        value: 'c'
    }
    render() {
        return (
            <>
                <div>
                    <CheckBoxGroup {...this.state} onChange={(newArr) => {
                        this.setState({
                            chooseDatas: newArr
                        })
                    }}></CheckBoxGroup>
                </div>
                <div>
                    <RadioBoxGroup {...this.state} onChange={(newVal) => {
                        this.setState({
                            value: newVal
                        })
                    }}></RadioBoxGroup>
                </div>
                <div>
                    <SelectBoxGroup {...this.state} onChange={(newVal) => {
                        this.setState({
                            value: newVal
                        })
                    }}></SelectBoxGroup>
                </div>
                <div style={{
                    border: '1px solid #f40'
                }}>
                    <ThreeLayout leftWidth={100}
                        rightWidth={200}
                        minWidth={10000}
                        gap={30}
                        left={(<span>left</span>)}
                        right={(<span>right</span>)}
                    >
                        <div>main</div>
                    </ThreeLayout>
                </div>
            </>

        )
    }
}
