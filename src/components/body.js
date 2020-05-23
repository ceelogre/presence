import React from 'react'
import '../stylesheets/components/body.scss'
import TypeForm from './typeform'
import UserLogin from './login'
import ToDo from './todo'

import { Layout, Breadcrumb } from 'antd'
const { Content } = Layout

class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '48px 0' }}>
                </Breadcrumb>
                <div className='antd-jumbotron'>
                    <div className='jumbotron-header'>
                        <h1>Samuel Nishimwe</h1>
                        <h2>I enjoy being baffled by computers and being amazed at what human brains can accomplish</h2>
                    </div>
                </div>
                <div className='site-layout-content'>
                    <p>Hi there, I'm Sam, a developer from Kigali, Rwanda. Nice to meet you :) </p>
                    <p>I'm starting out in the engineering industry, my day job involves facilitating engineers
        building products and - for my own growth -  writing <code>code</code> and applying the engineering practices that goes with it. I'm also gearing up for a night job which will be either contributing to open source
        projects or implementing <bdi>ideas</bdi> or both.
      </p>
                    <p>
                        This is my personal website, here you can find my porfolio and if you have a minute, I also write about my professional life.
      </p>
                </div>
            </Content>
        )
    }
}

export default Body