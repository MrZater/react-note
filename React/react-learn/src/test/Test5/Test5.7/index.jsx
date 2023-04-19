/* eslint {"no-unused-vars":"off","jsx-a11y/anchor-is-valid":"off","jsx-a11y/anchor-has-content":"off","no-script-url":"off"} */

import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import './index.css'
function A() {
    return (
        <h1>
            A
        </h1>
    )
}
function B() {
    return (
        <h1>
            B
        </h1>
    )
}
function C() {
    return (
        <h1>
            C
        </h1>
    )
}
function D() {
    return (
        <h1>
            D
        </h1>
    )
}
function NavBar() {
    let activeClassName = 'selected'
    let activeStyle = {
        textDecoration: "underline",
        color: 'green'
    }
    return (
        <>
            <Link to="/a" >ToA</Link>
            <Link replace to={{
                pathname: '/b',
                hash: '',
                search: '?a=1&b=2'
            }}>ToB</Link>
            <NavLink
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
                to='/c'
            >ToC</NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                to='/d'
            >ToD</NavLink>
        </>
    )
}




export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path='/a' element={<A></A>}></Route>
                        <Route path='/b' element={<B></B>}></Route>
                        <Route path='/c' element={<C></C>}></Route>
                        <Route path='/d' element={<D></D>}></Route>
                        <Route path='/*' element={<Navigate to="/a" replace={true} />}></Route>

                    </Routes>
                </Router>
                {/* <Navigate to="/a" replace={true} /> */}
            </>
        )
    }
}
