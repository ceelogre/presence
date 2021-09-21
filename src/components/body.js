import React from 'react'
import '../stylesheets/components/body.scss'

class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='body'>
                <div className='jumbotron'>
                    <h1>Samuel Nishimwe</h1>
                    <h2>I enjoy being baffled by computers and being amazed at what human brains can accomplish</h2>
                </div>
                <div className='main-content'>
                    <p>Hi there, I'm Sam, a developer from Kigali, Rwanda. Nice to meet you :) </p>
                    <p>I'm in the software engineering industry, my day job involves working with engineers
                        building products and (for my own growth)  writing <code><i>code</i></code> and applying the engineering practices that goes with it. I'm also gearing up for a night job which will be either contributing to open source
                        projects or implementing <bdi>ideas</bdi> or both.
                    </p>
                    <p>
                        This is my personal website, here you can find my porfolio and if you have a minute, I also write about my professional life.
                    </p>
                </div>
            </div>
        )
    }
}

export default Body