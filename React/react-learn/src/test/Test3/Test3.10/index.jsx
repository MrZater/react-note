import React, { Component } from 'react'
import AddBtn from './AddBtn'
import Wrapper from './Wrapper'
export default class index extends Component {
    state = {
        arr: [],
        changeArr: (newArr) => {
            this.setState({
                arr: [...this.state.arr, newArr]
            })
        }
    }
    render() {
        return (
            <>
                <AddBtn  {...this.state}></AddBtn>
                <Wrapper arr={this.state.arr}></Wrapper>
            </>
        )
    }
}
