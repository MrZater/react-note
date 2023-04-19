import React, { Component } from 'react'
import Ball from './Ball'
import { getRandom } from '../utils';
/**
 * 每隔一段时间，自动产生一个小球，各种数据随机
 */
export default class BallList extends Component {
    constructor(props) {
        super(props);
        // 初始化state，ballInfoes为小球的信息数组
        this.state = {
            ballInfoes: []
        }
        // 保存最大边缘位置
        let maxLeft = document.documentElement.clientWidth - 100
        let maxTop = document.documentElement.clientHeight - 100

        let timer = setInterval(() => {
            // 随机小球大小
            let size = getRandom(50, 200)
            let info = {
                height: size,//小球高度
                width: size,// 小球宽度
                left: getRandom(0, maxLeft),// 小球出生位置x
                top: getRandom(0, maxTop),// 小球出生位置y
                speedX: getRandom(50, 300),//X方向上的速度
                speedY: getRandom(50, 300),//Y方向上的速度
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`// 随机背景色
            }
            // 重新渲染
            this.setState({
                ballInfoes: [...this.state.ballInfoes, info]
            })
            // 限定小球数量
            if (this.state.ballInfoes.length >= 10) {
                clearInterval(timer)
            }
        }, 1000);
    }
    render() {
        let balls = this.state.ballInfoes.map((item, i) => {
            // 遍历ballInfoes数组，生成小球React对象数组
            // {...item} 解构传递组件属性
            return <Ball key={i} {...item}></Ball>
        })
        return (<>
            {balls}
        </>)
    }
}
