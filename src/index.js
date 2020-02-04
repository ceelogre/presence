import React from 'react'
import ReactDom from'react-dom'
import Welcome from './components/header'
import './stylesheets/base/base.scss'
import './i18n'


function countDown () {
    let timeout = new Date('Feb 5, 2020 23:59:59')
    const element = (
        <div className="main">
            <Welcome />
            <h1>working </h1>
            <h2>This ugly page will be off at: </h2>
            <h3> { timeout.toString() } </h3>
        </div>
    )

    ReactDom.render(
        element,
        document.getElementById('app')
    )
}

setInterval(countDown, 1000)