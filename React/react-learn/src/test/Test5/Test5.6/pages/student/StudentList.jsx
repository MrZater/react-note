import React from 'react'
import StudentSearchBar from "./StudentSearchBar"
import StudentTable from "./StudentTable"
import { searchStudents } from "../../../../../services/student"
import { useState, useEffect } from "react"
import qs from "query-string"
import Pager from "../../../../../components/Pager"
import { useLocation, useNavigate } from 'react-router-dom'
/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值
 */
function getQuery(search) {
    // 默认query
    const queryDefault = {
        page: 1,
        limit: 10,
        key: "",
        sex: -1
    };
    // 对传过来的search处理成对象
    let query = qs.parse(search);
    // 与默认query进行混合
    query = Object.assign({}, queryDefault, query);
    // 类型转换
    query.limit = +query.limit;
    query.page = +query.page;
    query.sex = +query.sex;
    // 抛出query
    return query;
}

/**
 * 自定义钩子，通过query得到响应数据
 * 获取服务器的响应结果
 * @param query 查询条件对象
 */
function useResp(query) {
    // 创建状态保存响应数据
    const [resp, setResp] = useState({
        cont: 0,
        datas: []
    })
    useEffect(() => {
        // 页面挂在完成后调用api接口获取数据
        searchStudents({
            key: query.key,
            limit: query.limit,
            sex: query.sex,
            page: query.page
        }).then(r => {
            // 得到数据，更新状态
            setResp(r);
        })
    }, [query.key, query.limit, query.sex, query.page])
    // 将响应数据返回
    return resp;
}
// 通过query改变location
function changeLocation(query) {
    //根据条件对象，改变地址
    const search = qs.stringify(query)
    return search // ?a=1&b=2
}

export default function StudentList(props) {
    // navigate钩子
    let navigate = useNavigate()
    // 获取location的钩子
    const location = useLocation()
    // 调用getQuery传入location中的search，得到query
    const query = getQuery(location.search)
    // 通过query对象获取数据
    const resp = useResp(query);
    return (
        <div>
            {/* 搜索模块 */}
            <StudentSearchBar
                // 默认参数
                defaultValue={{
                    key: query.key,
                    sex: query.sex
                }}
                // 传入querychange回调
                onSearch={cod => {
                    const newQuery = {
                        ...query,
                        key: cod.key,
                        sex: cod.sex,
                        page: 1
                    }
                    // 得到search
                    const search = changeLocation(newQuery, props.history);
                    // 修改地址栏
                    navigate("?" + search)
                }}
            ></StudentSearchBar>
            <StudentTable stus={resp.datas} />
            <div>
                <Pager
                    current={query.page}
                    total={resp.cont}
                    limit={query.limit}
                    panelNumber={5}
                    onPageChange={newPage => {
                        const newQuery = {
                            ...query,
                            page: newPage
                        }
                        // 得到search
                        const search = changeLocation(newQuery, props.history);
                        // 修改地址栏
                        navigate("?" + search)
                    }}
                />
            </div>

        </div>
    )
}
