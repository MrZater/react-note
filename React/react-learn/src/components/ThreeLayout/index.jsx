import React from 'react'
import './index.css'
import PropTypes from 'prop-types';

export default function ThreeLayout(props) {

    // 混合属性
    return (
        <div className='three-layout' style={{
            minWidth: props.minWidth
        }}>
            {/* 主区域 */}
            <div className="main" >
                {props.children}
            </div>
            {/* 左边栏 */}
            <div className="aside-left" style={
                {
                    width: props.leftWidth,
                    marginRight: props.gap
                }
            }>
                {props.left}
            </div>
            {/* 右边栏 */}
            <div className="aside-right" style={
                {
                    width: props.rightWidth,
                    marginLeft: props.gap
                }
            }>
                {props.right}
            </div>
        </div>
    )
}
// 默认属性
ThreeLayout.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 500,
    gap: 0
}
// 属性约束
ThreeLayout.propTypes = {
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    minWidth: PropTypes.number,
    gap: PropTypes.number,
    children: PropTypes.node,
    left: PropTypes.node,
    right: PropTypes.node,
}