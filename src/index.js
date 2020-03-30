import React from 'react'
import ReactDom from'react-dom'
import Welcome from './components/header'
import './stylesheets/base/base.scss'
import './i18n'


function countDown () {
    let timeout = new Date('Feb 5, 2020 23:59:59')
    const element = (
        <div className="main">
            <div className="header">
                <h1>Coming soon</h1>
            </div>
            <div className="body">
                <div className="coming-soon">
                    <img src="../../../public/img/pandaTree.jpeg" />
                </div>
            </div>
            <div className="footer">Coming soon</div>
        </div>
    )

    ReactDom.render(
        element,
        document.getElementById('app')
    )
}

setInterval(countDown, 1000)