import React from 'react'

 function welcome({ history }) {
    const loginId = localStorage.getItem("loginId");
    return (
        <div>
            欢迎你，{loginId}
            <p>
                <button onClick={() => {
                    localStorage.removeItem("loginId");
                    history.push("/login");
                }}>注销</button>
            </p>
        </div>
    )
}
welcome.wrappers = ['@/wrappers/PrivateRouter.js', '@/wrappers/HandleTitle.js']
welcome.title = '欢迎'
export default welcome
