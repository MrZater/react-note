import React, { Component } from 'react'
import Pager from '../components/Pager'
import Modal from '../components/Modal'

export default class PageTest extends Component {

    state = {
        current: 3,// 当前页
        total: 42,// 总数据量
        limit: 5,// 页容量
        panelNumber: 5, // 页码显示数量
        isLoading: false// 是否加载中
    }
    // 修改页码事件
    handleChangePage = (newPage) => {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({
                current: newPage,
                isLoading: false
            })
        }, 300);
    }
    render() {
        let arr = ['Vue', 'React', 'JQuery', 'Lodash', 'Echarts', 'Mock', 'Md5', 'TypeScript']
        return (
            <>

                <h1>{arr[this.state.current] ? arr[this.state.current] : 'loading...'}</h1>
                <Pager
                    {...this.state} onPageChange={this.handleChangePage}
                ></Pager >
                <Modal isShow={this.state.isLoading}></Modal>
            </>
        )
    }
}
