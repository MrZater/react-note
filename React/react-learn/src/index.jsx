import counterModel from './models/counter'
import dav from 'dva'

import routerConfig from './routerConfig'
import {createBrowserHistory} from 'history'
import loading from 'dva-loading'
// 得到dva对象
let app = dav({
    history:createBrowserHistory()
})
app.model(counterModel) 
app.use(loading({
    namespace:'handleEffect'
}))
// 设置根路由，即启动后要运行的函数,函数的返回结果会被渲染
app.router(routerConfig)
// 启动dva
app.start("#root")




