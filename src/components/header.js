import React from 'react'
import { useTranslation } from 'react-i18next'
import { Layout, Menu } from 'antd'

import '../stylesheets/components/header.scss'

const { Header } = Layout
class Header_ extends React.Component {
    render () {
        return (
            <Header className='ant-header'>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" style={{textAlign: 'center' }}>
                    <Menu.Item key="1">THOUGHTS</Menu.Item>
                    <Menu.Item key="2">WORK</Menu.Item>
                    <Menu.Item key="3">LET'S TALK</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default Header_