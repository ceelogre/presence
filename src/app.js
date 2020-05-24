import React from 'react'

import { Layout } from 'antd'

import './stylesheets/base/base.scss'
import './i18n'
import Footer_ from './components/footer'
import Body from './components/body'
import Header from './components/header'

class App extends React.Component {
    render() {
        return (
            <Layout className='layout'>
                <Header />
                <Body />
                <Footer_ />
            </Layout>
        )
    }
}
export default App