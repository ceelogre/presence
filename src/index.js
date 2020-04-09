import React from 'react'
import ReactDom from'react-dom'
import panda from './assets/images/pandaTree.jpeg'
import './stylesheets/base/base.scss'
import './i18n'


class Parent extends React.Component {
    render () {
        return (
            <div className="main">
                <div className="header">
                    <h1>Coming soon</h1>
                </div>
                <div className="body">
                    <div className="coming-soon">
                        <img src= {panda} />
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
} 

    ReactDom.render(
        <Parent />, 
        document.getElementById('root')
    )