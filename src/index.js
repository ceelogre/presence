import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import Paths from './paths'
import {BrowserRouter} from 'react-router-dom'

const ThemeContext = createContext()

const root = createRoot(
    document.getElementById('root')
)


root.render (
    <ThemeContext value="light" >
        <BrowserRouter>
            <Paths />
        </BrowserRouter>
    </ThemeContext>)