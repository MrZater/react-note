import PropTypes from 'prop-types'
// 验证方法对象
export default {
    // children必须是一个可渲染对象
    children: PropTypes.node,
    // groupDatas必须是一个数组，并且数组每一项中必须有值为字符串的value属性和text属性
    groupDatas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
    // chooseDatas必须为每一项都是字符串的数组
    chooseDatas: PropTypes.arrayOf(PropTypes.string),
    singleData: PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}