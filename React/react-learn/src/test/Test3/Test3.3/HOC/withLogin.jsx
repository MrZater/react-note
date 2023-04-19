import React, { Component } from 'react'

/**
 * 高阶函数 WithLogon
 * @param {*} Comp 传入参数：组件
 * @param {*} str 传入其他参数
 * @returns 
 */
export default function WithLogin(Comp, str) {


    return function LoginWrapper(props) {
        return (
            <>
                {/* 高阶组件中对comp的处理 */}
                {/* 在原有组件上添加一些dom节点 */}
                <span>{props.isLogin ? '已登录' : '未登录'}</span>
                {str}
                {/* 参数原封不动的传给组件 */}
                <Comp {...props}></Comp>
            </>
        )
    }

}