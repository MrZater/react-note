import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        {/* 为path加上*，表示继续为子路由进行精确匹配 */}
        <Route path="/*" element={<Admin></Admin>} />
      </Routes>
    </Router>
  )
}
