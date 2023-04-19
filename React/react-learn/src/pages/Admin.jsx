import React from 'react'
import Layout from "../components/Layout"
import Header from "../components/Header"
import Menu from "../components/Menu"
import { Route, Routes } from "react-router-dom"
import Welcome from "./Welcome"
import StudentList from "./student/StudentList"
import StudentAdd from "./student/StudentAdd"
import CourseList from "./course/CourseList"
import CourseAdd from "./course/CourseAdd"

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
            </Routes>
        </Layout>
    )
}
