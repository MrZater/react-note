import React, { Component, createRef } from 'react'
import './Box.css'

export default class Box2 extends Component {
    state = {
        x: 0,
        y: 0
    }
    divRef = createRef()
    handleMouseMove = (e) => {
        const { left, top } = this.divRef.current.getBoundingClientRect()
        let x = e.clientX - left
        let y = e.clientY - top
        this.setState({
            x: x,
            y: y
        })
    }
    render() {
        return (
            <div className='box' ref={this.divRef}
                onMouseMove={this.handleMouseMove}
            >
                <div>
                    <p>left:{parseInt(this.state.x)}</p>
                    <p>top:{parseInt(this.state.y)}</p>
                </div>


            </div>
        )
    }
}
