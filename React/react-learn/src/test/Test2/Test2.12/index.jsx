import React, { Component } from 'react'
import Modal from '../../components/Modal'

export default class index extends Component {
    state = {
        isShow: false
    }
    // 改变蒙层状态
    changeIsShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div>
                {/* 判断蒙层状态 */}
                {this.state.isShow ?
                    <Modal onClose={this.changeIsShow} isShow={true} bg={'rgba(255,0,0,.2)'}>
                        {/* 传参 children */}
                        <div style={{
                            background: '#fff',
                            padding: '10px 40px 10px 40px',
                            borderRadius: '10px'
                        }}>
                            <h1>demo</h1>
                            <button onClick={this.changeIsShow}>关闭蒙层</button>
                        </div>
                    </Modal> : null
                }
                <button onClick={this.changeIsShow}>显示蒙层</button>
            </div>

        )
    }
}
