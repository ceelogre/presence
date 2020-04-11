import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

class Header extends React.Component {
    render () {
        return (
            <Jumbotron>
                <h1>I will drive all night</h1>
                <p>Most of the times, it takes a lot more and a little longer to get what you want</p>
                <Button variant="primary">Really?</Button>
            </Jumbotron>
        )
    }
}

export default Header