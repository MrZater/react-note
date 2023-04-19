import React from 'react'
import { Consumer } from "./formContext"
export default function FormButton(props) {
    return (
        <Consumer>
            {ctx => {
                return (
                    // button的点击事件调用上下文中的回调函数
                    <button onClick={() => {
                        ctx.submit();
                    }}>
                        {props.children}
                    </button>
                );
            }}
        </Consumer>

    )
}
