import React, { Component } from 'react'
import Li from './Li'
export default class Wrapper extends Component {
    render() {
        let LS = this.props.arr.map((item, index) => {
            return (
                <Li obj={item} key={index}></Li>
            )
        })
        return (
            <>
                <ul>
                    {LS}

                </ul>
            </>
        )
    }
}
