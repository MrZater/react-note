import React, { Component } from 'react'
import { BrowserRouter as Router,unstable_HistoryRouter, Route, Routes, Outlet } from 'react-router-dom'




function Index() {
  return (
    <>
      <h1>
        Index
      </h1>
      <Outlet></Outlet>
    </>


  )
}
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


export default class App extends Component {
  render() {
    return (
      <Router>
        < Routes>
          <Route path='/' element={<Index></Index>}>

            <Route path='/a' caseSensitive element={<A></A>}></Route>
          </Route>

          <Route path='/b' element={<B></B>}></Route>
          <Route path='/c' >
            <Route path=':id' element={<D></D>}></Route>
          </Route>

        </Routes>
      </Router>
    )
  }
}
