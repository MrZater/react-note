import React, { Component } from 'react'
import { A } from './Comps'
import withLog from './HOC/withLog'
let LogA = withLog(A)


export default class index extends Component {
    myRef = React.createRef()
    componentDidMount = () => {
      console.log(this.myRef);
    }
    
    render() {
        return (
            <>
            {/* 给高阶组件LogA传递一个ref对象，得到该组件被高阶函数处理前的组件的组件对象 */}
                <LogA a={3} ref={this.myRef} ></LogA>
            </>
        )
    }
}
