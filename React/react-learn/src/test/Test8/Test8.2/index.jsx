import React, { Component } from 'react'
import StudentSearch from './StudentSearch'
import { Provider } from 'react-redux'
import store from '../../../redux/test8'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StudentSearch></StudentSearch>
            </Provider>
        )
    }
}
