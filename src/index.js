import React from 'react'
import ReactDom from'react-dom'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import './stylesheets/base/base.scss'
import './i18n'


class Parent extends React.Component {
    render () {
        return (
            <div className="main">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
} 

    ReactDom.render(
        <Parent />, 
        document.getElementById('root')
    )