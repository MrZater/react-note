import React from 'react'
import HocCounter from './Counter'
// 导入dva/router中的routerRedux，这是一个Router组件创建函数，替代BrowserRouter和HashRouter
import { BrowserRouter, HashRouter, Switch, Route, routerRedux, NavLink } from 'dva/router'

function Home() {
  return (
    <h1>首页</h1>
  )
}

export default function App({ history }) {
  return (
    <>
      {/* 得到props中的history，与配置的history是同一个对象 */}
      <routerRedux.ConnectedRouter history={history}>
        <div>
          <ul>
            <li><NavLink to='/'>首页</NavLink></li>
            <li><NavLink to='/counter'>计数器</NavLink></li>
          </ul>
          <Switch>
            <Route component={HocCounter} path='/counter'></Route>
            <Route component={Home} path='/'></Route>
          </Switch>
        </div>
      </routerRedux.ConnectedRouter>
    </>
  )
}
