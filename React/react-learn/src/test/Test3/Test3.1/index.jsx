import React, { Component } from 'react'
import ValidationComp from './ValidationComp'
export default class index extends Component {
  render() {
    return (
      <div>
        <ValidationComp a={1} d={2} l={10}></ValidationComp>
      </div>
    )
  }
}
