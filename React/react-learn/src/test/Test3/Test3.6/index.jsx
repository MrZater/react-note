import Banner from '../../components/Banner'
import React, { Component } from 'react'
import src1 from "../../components/Banner/img/1.jpg"
import src2 from "../../components/Banner/img/2.webp"
import src3 from "../../components/Banner/img/3.jpg"
import src4 from "../../components/Banner/img/4.jpg"
import src5 from "../../components/Banner/img/5.webp"
export default class Test extends Component {
    render() {
        return (
            <div className="container">
                <Banner imgSrcs={[src1, src2, src3, src4, src5]}
                    duration={500}
                />
            </div>
        )
    }
}