import React from 'react'
import './index.css'


/**
 * 分页组件
 * 属性： 
 * 1. current：当前页码
 * 2. total：总数据量
 * 3. limit：每页数据量
 * 4. panelNumber 最多显示的页码数
 * 5. onPageChange 当页码改变的事件
 * 
 * 状态： 
 * 1. current
 */
export default function Pager(props) {
    // 总页量
    let pageNumber = getPageNumber(props)
    // 判断总页量是否为0
    if (pageNumber === 0) {
        return null
    }
    // 显示最小的页码数字
    let min = getMinNumber(props)
    // 显示最大的页码数字
    let max = getMaxNumber(min, props, pageNumber)
    // 页码数字对象
    let numbers = []
    for (let i = min; i < max; i++) {
        numbers.push(<span onClick={() => { toPage(i, props) }} className={i === props.current ? 'item active' : 'item'} key={i}>{i}</span>)
    }
    return (<>
        {/* 首页 */}
        <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
        {/* 上一页 */}
        <span onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }} className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
        {numbers}
        {/* 下一页 */}
        <span onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }} className={props.current === pageNumber ? 'item disabled' : 'item'}>下一页</span>
        {/* 尾页 */}
        <span onClick={() => { toPage(pageNumber, props) }} className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>

        <span className='current'>{props.current}</span>
        /
        <span>{pageNumber}</span>

    </>)
}
/**
 * 计算出最小数字
 * @param {*} props 
 */
function getMinNumber(props) {
    // 得到最小值
    let min = props.current - Math.floor(props.panelNumber / 2)
    // 判断边界
    if (min < 1) {
        min = 1
    }
    return min
}
/**
 * 计算最大数值
 * @param {*} min 
 * @param {*} props 
 */
function getMaxNumber(min, props, pageNumber) {
    // 通过最小值得到最大值
    let max = min + props.panelNumber
    // 判断边界
    if (max > pageNumber) {
        max = pageNumber
    }
    return max
}
/**
 * 跳转到某一页
 * @param {*} target  目标页码
 * @param {*} props 所有属性
 * @returns 
 */
function toPage(target, props) {
    // 判断跳转的页码是否是当前页
    if (props.current === target) {
        return
    }
    // 调用父级的页码改变事件
    props.onPageChange && props.onPageChange(target);
}
/**
 * 计算总页数
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit)
}
