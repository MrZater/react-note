import React, { Component } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import RenderBox from './RenderBox'
import HocBox from './HocBox'

class Hoc1 extends Component {
    render() {
        return (
            <div style={{
                left: this.props.x - 50,
                top: this.props.y - 50,
                position: 'absolute',
                height: 100,
                width: 100,
                background: 'lightblue'
            }}>

            </div>
        )
    }
}
class Hoc2 extends Component {
    render() {
        return (
            <div>
                <p>left:{parseInt(this.props.x)}</p>
                <p>top:{parseInt(this.props.y)}</p>
            </div>
        )
    }
}
let HocBox1 = HocBox(Hoc1)
let HocBox2 = HocBox(Hoc2)





export default class index extends Component {
    // render属性
    renderBox1 = (mouse) => {
        return (
            <div style={{
                left: mouse.x - 50,
                top: mouse.y - 50,
                position: 'absolute',
                height: 100,
                width: 100,
                background: 'lightblue'
            }}>

            </div>
        )
    }
    // render属性
    renderBox2 = (mouse) => {
        return (
            <div>
                <p>left:{parseInt(mouse.x)}</p>
                <p>top:{parseInt(mouse.y)}</p>
            </div>
        )
    }
    render() {
        return (
            <>
                <Box1></Box1>
                <Box2></Box2>
                <RenderBox render={this.renderBox1}>
                </RenderBox>
                <RenderBox render={this.renderBox2}>
                </RenderBox>
                <HocBox1></HocBox1>
                <HocBox2></HocBox2>
            </>
        )
    }
}
