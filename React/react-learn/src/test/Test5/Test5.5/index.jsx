import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useMatch, matchPath, useParams } from 'react-router-dom'
import qs from 'query-string'
function A(props) {
    // 页面跳转
    let navigate = useNavigate()
    // 获取路由信息
    let location = useLocation()
    // 获取params信息
    let params = useParams()
    // 获取match信息
    const { params: { c, d } } = useMatch("/a/:c/:d");
    console.log(c, d);
    let paramsList = []
    for (const key in params) {
        paramsList.push(<p key={params[key]}>{key}：{params[key]}</p>)
    }
    return (
        <>
            <h1>组件A</h1>
            <p>title：{location.state && location.state.title}</p>
            <p>id：{location.state && location.state.id}</p>
            <p>content：{location.state && location.state.content}</p>
            search：{paramsList}
            <button onClick={() => {
                navigate('/b?c=1&d=2', {
                    replace: false,
                    state: {
                        id: 1,
                        title: '我来自A',
                        content: 'toB'
                    },
                })
            }}>转B</button>
        </>
    )
}
function B(props) {
    let navigate = useNavigate()
    let location = useLocation()
    const query = qs.parse(location.search)
    let queryList = []
    for (const key in query) {
        queryList.push(<p key={query[key]}>
            {key}：{query[key]}
        </p>)
    }
    return (
        <>
            <h1>组件B</h1>
            <p>title：{location.state && location.state.title}</p>
            <p>id：{location.state && location.state.id}</p>
            <p>content：{location.state && location.state.content}</p>
            search：{queryList}
            <button onClick={() => {
                navigate('/a/3/4', {
                    replace: false,
                    state: {
                        id: 1,
                        title: '我来着B',
                        content: 'toA'
                    },
                })
            }}>转A</button>
        </>
    )
}



export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path='/a/:c/:d' element={<A></A>}></Route>
                        <Route path='/b' element={<B></B>}></Route>
                        <Route path='/*' element={<h1>Error</h1>}></Route>
                    </Routes>
                </Router>

            </>
        )
    }
}
