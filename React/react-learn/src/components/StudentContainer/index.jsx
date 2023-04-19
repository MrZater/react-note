import React, { useState, useEffect } from 'react'
import StudentList from "../StudentList"
import { getStudents } from "../../services/student"
import Pager from "../Pager"

/**
 * 用于提供数据，以及控制数据的变化
 */
export default function StudentContainer() {
    // 设置状态
    const [students, setStudents] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [panelNumber, setPanelNumber] = useState(5)
    //当页码和页容量发生变化时，将重新获取数据
    useEffect(() => {
        // 副作用函数
        // 获取数据
        (async function () {
            const resp = await getStudents(page, limit);
            // 获取学生列表
            setStudents(resp.findByPage); //设置学生数组
            // 获取数据总数
            setTotal(resp.cont);//设置学生总数
        })();
    }, [page, limit])// 副作用函数依赖page 、 limit

    return (
        <div>
            <StudentList stus={students} />
            <Pager
                current={page}
                limit={limit}
                total={total}
                panelNumber={panelNumber}
                // 页码改变事件
                onPageChange={newPage => {
                    setPage(newPage);
                }}
            />
            <p>
                每页显示的条数：
            <input type="number"
                    value={limit}
                    // 页容量改变事件
                    onChange={e => {
                        setLimit(parseInt(e.target.value));
                    }}
                />
            </p>
            <p>
                最多显示的数字页码：
                <input type="number"
                    value={panelNumber}
                    // 数字页码显示数量改变事件
                    onChange={e => {
                        setPanelNumber(parseInt(e.target.value));
                    }}
                />
            </p>
        </div>
    )
}
