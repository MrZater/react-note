import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
export default function StudentDetail(props) {
    const location = useLocation()
    const params = useParams()
    console.log(location, params)
    return (
        <div>
            <h1>学生详情页</h1>
            <h2>学号：{params.sno}</h2>
        </div>
    )
}
