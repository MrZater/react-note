import React, { useRef } from 'react'
function login(props) {
    const txtLoginId = useRef();
    const txtLoginPwd = useRef();
    console.log(props)
    return (
        <div>
            <p>
                账号：<input ref={txtLoginId} type="text" />
            </p> 
            <p> 
                密码：<input ref={txtLoginPwd} type="password" />
            </p>
            <p>
                <button onClick={() => {
                    if (txtLoginPwd.current.value === "123123") {
                        //登录成功
                        //保存账号
                        localStorage.setItem("loginId", txtLoginId.current.value);
                        props.history.push("/welcome");
                    }
                    else {
                        alert("账号/密码错误")
                    }
                }}>登录</button>
            </p> 
        </div>
    )
}
login.wrappers = ['@/wrappers/HandleTitle.js']
login.title = '登录'
export default login
