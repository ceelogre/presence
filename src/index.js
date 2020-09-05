import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/root'
import Paths from './paths'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(rootReducer)

render (
    <Provider store = {store} >
        <BrowserRouter>
            <Paths />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)