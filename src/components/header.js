import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/components/header.scss'

class Header extends React.Component {
  render() {
    return (<nav className="header-nav">
      <div className="header-nav left">
        <Link to="/">HOME
        </Link>
      </div>
      <Link to="/thoughts" title="Thoughts" >THOUGHTS</Link>
      <Link to="/work" title="Work" >WORK</Link>
      <Link to="contact" title="contact">LET'S TALK</Link>
      <Link to="/assets/resume" title="resume">RESUME</Link>
    </nav>
    )
  }
}

export default Header