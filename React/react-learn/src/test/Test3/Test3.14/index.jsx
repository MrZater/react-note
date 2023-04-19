import React from 'react'
var prev;
export default function index() {
    return <div onClick={e => {
        console.log(prev === e);
        console.log("react: div被点击了")
    }}>
        {/* focus事件不会冒泡 */}
        {/* h5中的音视频对象上的事件也不会冒泡 */}
        <input type="text" onFocus={e => {
            console.log("react：文本获得了焦点")
        }} />
        <button onClick={e => {
            console.log("react: 按钮被点击了");
            prev = e;
            e.persist()
            setTimeout(() => {
                console.log(e.type);
            }, 1000);
            // 阻止document上剩余事件的执行
            // e.nativeEvent.stopImmediatePropagation()
            // 标记该事件是否被阻止
            // console.log(e.isPropagationStopped());
            // React对象上阻止事件冒泡
            // e.stopPropagation();
            // console.log(e.isPropagationStopped());
        }}>按钮</button>
    </div>
}

document.querySelector("#root").onFocus = function(e){
    console.log("阻止focus事件冒泡")
    e.stopPropagation();
}
