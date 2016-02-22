import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import {Provider } from 'react-redux'
import counter from './reducers'
import App from './containers/App'

const store = createStore(counter)
const rootEl = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)


