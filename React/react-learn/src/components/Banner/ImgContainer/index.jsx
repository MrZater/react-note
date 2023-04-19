import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ImgContainer extends Component {

    // 属性验证
    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径的数组
        imgWidth: PropTypes.number.isRequired, //单张图片宽度
        imgHeight: PropTypes.number.isRequired, //单张图片高度
        duration: PropTypes.number.isRequired, //在多长时间内完成动画切换
    }
    // 设置ref
    containerRef = el => {
        this.div = el;
    }

    //计时器的间隔时间
    tick = 16

    timer = null;//计时器序号

    /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成切换
     * 给外层用
     * @param {*} index 图片下标，从0开始
     */
    switchTo(index) {
        // 边界判断
        //设置正确的index
        if (index < 0) {
            index = 0;
        }
        else if (index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1;
        }
        //1. 根据index，计算div的最终的marginLeft
        // 目标位置
        const targetLeft = -index * this.props.imgWidth;
        //2. 得到当前的marginLeft
        // 当前位置
        let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        //3. 计算运动的次数
        const times = Math.ceil(this.props.duration / this.tick);
        let curTimes = 0; //当前运动的次数
        //4. 计算每次运动的距离
        const totalDis = targetLeft - curLeft; //总距离
        const dis = totalDis / times; //每次运动的距离
        //先停止之前的动画
        clearInterval(this.timer);
        // 开启计时器，开始运动
        this.timer = setInterval(() => {
            // 计时器次数+1
            curTimes++;
            // 当前位置增加每次运动的距离
            curLeft += dis;
            // 设置div的marginleft
            this.div.style.marginLeft = curLeft + "px";
            // 当运动次数与计时器次数相等时，停止运动
            if (curTimes === times) {
                // 防止偏差，设置成目标值
                this.div.style.marginLeft = targetLeft + "px";
                // 清除计时器
                clearInterval(this.timer);
            }
        }, this.tick)
    }

    render() {
        const imgs = this.props.imgSrcs.map((src, i) => <img src={src} key={i} alt="" style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: "left"
        }} />)
        return (
            <div
                ref={this.containerRef}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight
                }}>
                {imgs}
            </div>
        )
    }
}
