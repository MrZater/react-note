import React from 'react'
import './index.css'
import PropTypes from 'prop-types';
// 引入公共类型约束对象
import types from '../../utils/commonTypes';

function Modal(props) {
    return (
        <div className='modal' onClick={e => {
            // 判断事件源
            if (e.target.className === 'modal') {
                props.onClose()
            }
        }} style={{
            background: props.bg
        }}>
            <div className="modal-center">
                {/* 判断是否有children属性传递过来 */}
                {props.children || '正在加载中......'}
            </div>
        </div>
    )
}
Modal.defaultProps = { // 默认属性 
    bg: 'rgba(0,0,0,.3)',
}
Modal.propTypes = {
    children: types.children,
    bg: PropTypes.string,
    onClose: PropTypes.func
}

export default Modal

