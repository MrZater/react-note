import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types";

export default class Layout extends Component {
    static propTypes = {
        header: PropTypes.node,
        aside: PropTypes.node,
        children: PropTypes.node
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    {this.props.header}
                </header>
                <div className="middle">
                    <aside className="aside">
                        {this.props.aside}
                    </aside>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
