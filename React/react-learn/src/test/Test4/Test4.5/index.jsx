import React from 'react'
import useAllStudents from '../../../myHooks/useAllStudent'

export default function App() {

    const stus = useAllStudents()
    const studentList = stus.map(item => {
        return (
            <li key={item.id}>{item.name}</li>
        )
    })
    return (
        <ul>
            {studentList}
        </ul>

    )
}