import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/components/header.scss'

class Header extends React.Component {
    render () {
        return ( <div>
                    <Link  to="/thoughts" title="Thoughts" >THOUGHTS</Link>
                    <a href="/work" title="Work" >WORK</a>
                    <a href="contact" title="contact">LET'S TALK</a>
                    </div>
        )
    }
}

export default Header