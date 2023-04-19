import React, { Component } from 'react'
import CheckBoxGroup from '../../components/Form/CheckBoxGroup'
import RadioBoxGroup from '../../components/Form/RadioBoxGroup'
import SelectBoxGroup from '../../components/Form/SelectBoxGroup'
export default class index extends Component {
  state = {
    datas: [
      { value: '1', text: 'A' },
      { value: '2', text: 'B' },
      { value: '3', text: 'C' },
    ],
    name: 'name',
    chooseDatas: ['1', '2'],
    value: '2'
  }
  changeChooseArray = (newArr) => {
    this.setState({
      chooseDatas: newArr
    })
  }
  changeChooseSingle = (newVal) => {
    this.setState({
      value: newVal
    })
  }
  render() {
    return (
      <>
        <div>
          <CheckBoxGroup {...this.state} onChange={this.changeChooseArray}></CheckBoxGroup>
        </div>
        <div>
          <RadioBoxGroup {...this.state} onChange={this.changeChooseSingle}></RadioBoxGroup>
        </div>
        <div>
          <SelectBoxGroup {...this.state} onChange={this.changeChooseSingle}></SelectBoxGroup>
        </div>
      </>

    )
  }
}
