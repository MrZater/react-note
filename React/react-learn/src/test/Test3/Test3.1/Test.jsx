import React, { Component } from 'react'

export default class Test extends Component {
// 默认属性
    static defaultProps = {
        a: 1,
        b: 2,
        c: 3
    }

    constructor(props) {
        console.log(props);
        super(props);
    }
    render() {
        return (
            <div>
                <span>a:{this.props.a}</span>
                <span>b:{this.props.b}</span>
                <span>c:{this.props.c}</span>
            </div>
        )
    }
}

