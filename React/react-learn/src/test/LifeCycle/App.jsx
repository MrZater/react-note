import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'
import NewLifeCycle from './NewLifeCycle'

export default class App extends Component {
    state = {
        number: 1,
        show: true
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        const comp = this.state.show ? <OldLifeCycle n={this.state.number}></OldLifeCycle> : null
        return (
            <div>
                {comp}
                <button onClick={this.handleClick}>n + 1</button>
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>显示/隐藏</button>
                <NewLifeCycle n={this.state.number}></NewLifeCycle>
                <button onClick={this.handleClick}>父组件 + 1</button>

            </div>

        )
    }
}
