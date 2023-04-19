import React from 'react'
import Layout from "../Layout"
import Header from "../Header"
import Menu from "../Menu"
import { Route, Routes } from "react-router-dom"
import Welcome from "./Welcome"
import StudentList from "./student/StudentList"
import StudentAdd from "./student/StudentAdd"
import CourseList from "./course/CourseList"
import CourseAdd from "./course/CourseAdd"
import Error from './404/Error'
import StudentDetail from './student/StudentDetail'

export default function Admin() {
    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Routes>
                <Route path="/" element={<Welcome></Welcome>} />
                <Route path="/students" element={<StudentList></StudentList>} />
                <Route path="/students/add" element={<StudentAdd></StudentAdd>} />
                <Route path="/courses" element={<CourseList></CourseList>} />
                <Route path="/courses/add" element={<CourseAdd></CourseAdd>} />
                <Route path="/students/:sno"  element={<StudentDetail></StudentDetail>} />
                {/* 其它未配置的路由即为404页面 */}
                <Route path="/*" element={<Error></Error>} />

            </Routes>
        </Layout>
    )
}
