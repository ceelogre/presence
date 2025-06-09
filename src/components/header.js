import React from 'react'
import { Link,  reloadDocument } from 'react-router-dom'

import '../stylesheets/components/header.scss'

const Header = () => {

  return (<nav className="header-nav">
      <div className="header-nav left">
        <Link to="/">HOME
        </Link>
      </div>
      <Link to="/thoughts" title="Thoughts" >THOUGHTS</Link>
      <Link to="/work" title="Work" >WORK</Link>
      <Link to="contact" title="contact">LET'S TALK</Link>
      <a href="/public/resume.pdf" title="resume">RESUME</a>
  </nav>
  )
}

export default Header