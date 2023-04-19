import React, { Component, createRef } from 'react'
import './Box.css'

export default class Box1 extends Component {
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
                <div style={{
                    left: this.state.x - 50,
                    top: this.state.y - 50,
                    position: 'absolute',
                    height: 100,
                    width: 100,
                    background: 'lightblue'
                }}>

                </div>


            </div>
        )
    }
}
