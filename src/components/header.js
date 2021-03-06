import React from 'react'
import { useTranslation } from 'react-i18next'
import { Layout, Menu} from 'antd'
import { Link } from 'react-router-dom'

import '../stylesheets/components/header.scss'

const { Header } = Layout
class Header_ extends React.Component {
    render () {
        return (
            <Header className='ant-header'>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" style={{textAlign: 'center' }}>
                    <Menu.Item key="1">
                        <Link  to="/thoughts" title="Thoughts" >THOUGHTS</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="/work" title="Work" >WORK</a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href="contact" title="contact">LET'S TALK</a>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default Header_