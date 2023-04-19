import React, { Component } from 'react'
import ThreeLayout from '../../components/ThreeLayout'

export default class index extends Component {
    render() {
        // 右边栏
        const right = (<div style={{
            border: '1px solid lightblue'
        }} >
            <h1>右边栏</h1>
        </div>)
        // 左边栏
        const left = (<div style={{
            border: '1px solid #008c8c'
        }}>
            <h1>左边栏</h1>
        </div>)
        // 主区域
        const main = (<div
            style={{
                border: '2px solid #f40'
            }}>
            <h1>主区域</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus, reprehenderit nihil placeat labore, minima laboriosam obcaecati quidem assumenda commodi nobis ex sequi, fugiat excepturi asperiores eius. Odit, natus ipsa.
        </div>)

        
        return (
            <div>
                <ThreeLayout
                    // 间隙
                    gap={30}
                    // 左边栏组件
                    left={left}
                    // 右边栏组件
                    right={right}>
                    {/* 主区域内容 */}
                    {main}
                </ThreeLayout>
            </div>
        )
    }
}
