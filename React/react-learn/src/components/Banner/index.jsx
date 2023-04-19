import React, {
    Component
} from 'react'
import "./index.css"
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer"
import SwitchArrow from "./SwitchArrow"
import SwitchDot from './SwitchDot'

export default class Banner extends Component {

    // 默认属性
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        duration: 500
    }

    // 属性验证
    static propTypes = {
        width: PropTypes.number.isRequired, //容器宽度
        height: PropTypes.number.isRequired, //容器高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径数组
        autoDuration: PropTypes.number.isRequired, //自动切换的间隔时间
        duration: PropTypes.number.isRequired, //完成一次切换需要的时间
    }

    timer = null; //自动切换的计时器

    autoSwitch() {
        // 清除之前的计时器
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            // 保存当前的index
            var cur = this.state.curIndex;
            // 获取下一个index
            cur = (cur + 1) % this.props.imgSrcs.length;
            // 进行切换
            this.handleSwitch(cur);
        }, this.props.autoDuration)
    }
    // 组件销毁时，销毁计时器
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // 组件挂在完成后，进行自动轮播
    componentDidMount() {
        this.autoSwitch();
    }
    // 状态记录
    state = {
        curIndex: 0 //当前显示的第几张图片
    }
    // 图片容器ref
    imgContainerRef = el => {
        this.imgContainer = el;
    }
    // 点击左右按钮事件
    handleArrowChange = type => {
        // 记录当前index
        var cur = this.state.curIndex;
        // 判断点击是哪个按钮
        // 向左
        if (type === "left") {
            // index--
            cur--;
            if (cur < 0) {
                // 边界判断
                cur = this.props.imgSrcs.length - 1;
            }
        } else {
            // 向右
            // index++
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                // 边界判断
                cur = 0;
            }
        }
        // 移动
        this.handleSwitch(cur);
    }

    /**
     * 切换到
     */
    handleSwitch = index => {
        // 重新设置状态
        this.setState({
            curIndex: index
        })
        //得到ImgContainer的组件对象
        // 调用图片容器中的switchTo方法，传入index
        this.imgContainer.switchTo(index);
    }

    render() {
        return (<div div className="banner-container"
            style={
                {
                    width: this.props.width,
                    height: this.props.height
                }
            }
            // 鼠标进入，清除计时器
            onMouseEnter={
                () => {
                    clearInterval(this.timer);
                }
            }
            // 鼠标离开，打开计时器
            onMouseLeave={
                () => {
                    this.autoSwitch();
                }
            } >
            <ImgContainer ref={
                this.imgContainerRef
            }
                imgSrcs={
                    this.props.imgSrcs
                }
                imgWidth={
                    this.props.width
                }
                imgHeight={
                    this.props.height
                }
                duration={
                    this.props.duration
                }
            />
            <SwitchArrow onChange={
                this.handleArrowChange
            }
            />
            <SwitchDot total={
                this.props.imgSrcs.length
            }
                curIndex={
                    this.state.curIndex
                }
                onChange={
                    this.handleSwitch
                }
            /> </div >
        )
    }
}