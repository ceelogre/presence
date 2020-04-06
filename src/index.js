import React from 'react'
import ReactDom from'react-dom'
import Welcome from './components/header'
import './stylesheets/base/base.scss'
import './i18n'


class CountDown extends React.Component {
    render () {
        return (
            <div className="main">
                <div className="header">
                    <h1>Coming soon</h1>
                </div>
                <div className="body">
                    <div className="coming-soon">
                        <img src="../../../public/img/pandaTree.jpeg" />
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
} 

    ReactDom.render(
        <CountDown />, 
        document.getElementById('app')
    )