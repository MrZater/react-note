
// // 导入PureComponent
// import React, { PureComponent } from 'react'
// // 将该组件做成纯组件
// export default class Li extends PureComponent {
//     render() {
//         console.log('hasRender!');
//         return (
//             <>
//                 <li style={{
//                     color: this.props.obj.isFinish ? 'red' : 'green'
//                 }}>{this.props.obj.name}</li>
//             </>
//         )
//     }
// }

// 函数组件导入memo
import React, { memo } from 'react'

function Li(props) {
    return (
        <>
            <li style={{
                color: props.obj.isFinish ? 'red' : 'green'
            }}>{props.obj.name}</li>
        </>
    )
}
// 用memo对组件进行处理，返回一个新组件
export default memo(Li)
