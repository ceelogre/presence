import React, { createContext } from 'react'
import { render } from 'react-dom'
import Paths from './paths'
import {BrowserRouter} from 'react-router-dom'

const UserContext = createContext({
    state: {},
    actions: {}
})

render (
    <UserContext.Provider >
        <BrowserRouter>
            <Paths />
        </BrowserRouter>
    </UserContext.Provider>,
    document.getElementById('root')
)