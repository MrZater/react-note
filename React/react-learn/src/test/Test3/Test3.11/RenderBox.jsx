import React, { Component, createRef } from 'react'
import './Box.css'

export default class RenderBox extends Component {
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
                <h1>RenderProps</h1>
                {/* 通过render属性将子组件中的属性或状态传给父组件，父组件以函数调用的方式渲染render属性中的数据 */}
                {this.props.render(this.state)}
            </div>
        )
    }
}
