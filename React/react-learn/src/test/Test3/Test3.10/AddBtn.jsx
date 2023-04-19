import React, { Component } from 'react'

export default class AddBtn extends Component {
    state = {
        name: '',
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }} />
                <button onClick={() => {
                    this.props.changeArr({ name: this.state.name, isFinish: Math.random() > 0.5 })
                    this.setState({
                        name: ''
                    })
                }}>添加任务</button>
            </>
        )
    }
}
