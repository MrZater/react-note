import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../redux/test8'
import Counter from '../../../components/Counter'
function App() {
    return (
        <Provider store={store}>
            <Counter >
                
            </Counter>
        </Provider>

    )
}

export default App
