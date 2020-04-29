import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import './stylesheets/base/base.scss'
import './i18n'


class App extends React.Component {
    render () {
        return (
            <Container fluid className="main">
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Body />
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <Footer  />
                    </Col>
                </Row>
            </Container>
        )
    }
} 
export default App