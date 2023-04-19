import React, { Component } from 'react'
// 组件A
export  class A extends Component {
  render() {
    return (
      <div>A:{this.props.a}</div>
    )
  }
}
// 组件B
export  class B extends Component {
    render() {
      return (
        <div>B:{this.props.b}</div>
      )
    }
  }
  
