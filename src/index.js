import React from 'react'
import { render } from 'react-dom'
import Paths from './paths'
import {BrowserRouter} from 'react-router-dom'

render (
    <Provider >
        <BrowserRouter>
            <Paths />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)