import React, { Component } from 'react'

export default class NumberInput extends Component {
    state = {
        val: ''
    }
    handleChange = (e) => {
        let val = e.target.value
        val = val.replace(/\D/g, '')
        this.setState({
            val
        })
    }
    render() {
        return (
            <input type="text" onChange={this.handleChange} value={this.state.val} />
        )
    }
}
