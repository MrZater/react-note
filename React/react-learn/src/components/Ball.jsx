import React, { Component } from 'react'
import "./Ball.css"
/**
 * 制作一个能够自动移动的小球
 */
export default class Ball extends Component {
    constructor(props) {
        super(props);
        // 属性中需要分别传递横纵坐标上的速度，每秒移动的像素值
        // props.speedX,props.speedY
        // 需要传递背景颜色，如果没有，则使用#f40
        // props.width,props.height小球的大小
        this.state = {
            left: props.left || 0,// 横坐标
            top: props.left || 0,// 纵坐标
            speedX: props.speedX,//X方向上的速度
            speedY: props.speedY// Y方向上的速度
        }
        let duration = 16

        // 设置计时器
        setInterval(() => {
            // X方向上移动的距离
            let xDis = this.state.speedX * duration / 1000;
            // Y方向上移动的距离
            let yDis = this.state.speedY * duration / 1000;
            // X方向上的新位置
            let newLeft = this.state.left + xDis;
            // Y方向上的新位置
            let newTop = this.state.top + yDis;
            // 当小球处于最左边时
            if (newLeft < 0) {
                newLeft = 0;
                this.setState({
                    speedX: -this.state.speedX,
                })
                // 当小球处于最右边时
            } else if (newLeft >= document.documentElement.clientWidth - this.props.width) {
                newLeft = document.documentElement.clientWidth - this.props.width;
                this.setState({
                    speedX: -this.state.speedX,
                })
            }
            // 当小球处于最上边时
            if (newTop < 0) {
                newTop = 0;
                this.setState({
                    speedY: -this.state.speedY,
                })
                // 当小球处于最下边时
            } else if (newTop >= document.documentElement.clientHeight - this.props.height) {
                newTop = document.documentElement.clientHeight - this.props.height;
                this.setState({
                    speedY: -this.state.speedY,
                })
            }
            // 正常情况下的小球运动
            this.setState({
                left: newLeft,
                top: newTop
            })

        }, duration);
    }
    render() {
        return (
            <div className='Ball' style={{
                left: this.state.left + 'px',
                top: this.state.top + 'px',
                backgroundColor: this.props.bg || "#f40",
                width: this.props.width + 'px',
                height: this.props.height + 'px'
            }}>

            </div>
        )
    }
}
