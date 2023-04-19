import React, { Component, createRef } from 'react'
import './Box.css'

function HocBox(Comp) {
    return class HocBox extends Component {
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
                    <h1>HOC</h1>
                    <Comp {...this.props} x={this.state.x} y={this.state.y}></Comp>


                </div>
            )
        }
    }

}





export default HocBox