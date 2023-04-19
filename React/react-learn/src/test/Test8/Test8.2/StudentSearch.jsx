import React, { Component } from 'react'
// 搜索模块
import StudentSearchBar from '../../../components/StudentSearchBar'
// 表单模块
import StudentTable from '../../../components/StudentTable'
// 分页器
import Pager from '../../../components/Pager'
// 蒙层
import Modal from '../../../components/Modal'
// 仓库
import store from '../../../redux/test8'
// 导入react-redux
import { connect } from 'react-redux'
// 改变仓库中的搜索条件
import { change as changeCondition } from '../../../redux/test8/action/student/searchCondition'
// 获取数据
import { fetchStudents } from '../../../redux/test8/action/student/searchResult'


// 蒙层组件
function Loading(props) {
  return (
    <>
      {props.show && (<Modal>
        <div style={{
          color: '#fff',
          fontSize: 30
        }}>加载中。。。</div>
      </Modal>)}
    </>
  )
}


// 搜索模块的connect
// 得到属性对象
let mapStateToProps = (state) => ({
  defaultValue: {
    sex: state.students.condition.sex,
    key: state.students.condition.key
  }
})
// 得到事件函数对象
let mapDispatchToProps = (dispatch) => ({
  onSearch: (newVal) => {
    dispatch(changeCondition({
      ...newVal,
      page: 1
    }))
    dispatch(fetchStudents())

  }
})
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)


// 表单模块
mapStateToProps = (state) => ({
  stus: state.students.result.datas,
})
const Table = connect(mapStateToProps)(StudentTable)


// 分页器模块
mapStateToProps = (state) => ({
  current: state.students.condition.page,
  total: state.students.result.total,
  limit: state.students.condition.limit,
  panelNumber: 5,
})
mapDispatchToProps = (dispatch) => ({
  onPageChange: (newpage) => {
    dispatch(changeCondition({
      page: newpage,
    }))
    dispatch(fetchStudents())

  }
})
const PagerContainer = connect(mapStateToProps, mapDispatchToProps)(Pager)

// 蒙层模块
mapStateToProps = (state) => ({
  show: state.students.result.isLoading,
})
const LoadingComp = connect(mapStateToProps)(Loading)




export default class StudentSearch extends Component {
  // 刚创建组件时获取数据
  componentDidMount = () => {
    store.dispatch(fetchStudents())
  }

  render() {
    return (
      <>
        <SearchBar></SearchBar>
        <Table></Table>
        <PagerContainer></PagerContainer>
        <LoadingComp></LoadingComp>
      </>

    )
  }
}
