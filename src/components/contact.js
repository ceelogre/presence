import React from 'react'
import ContactHandler from './fx/contact'
import '../stylesheets/components/contact.scss'

const Contact = () => {
  return (
    <main>
      <h3>Contact page</h3>
      <section>
        <p>Wanna get in touch? There are multiple ways you can do that.</p>
        <ul>
          <li>Twitter: <a href="https://x.com/ceelogre" target='blank'>@ceelogre</a></li>
          <li>LinkedIn: <a href='https://linkedin.com/in/ceelogre' target='blank'>Samuel Nishimwe</a></li>
          <li>Email: <a href='mailto:whois@duck.com?subject=Pi Tech contact'>whois@duck.com</a> </li>
        </ul>
      </section>
      <div className="form-card">
        <form onSubmit={ContactHandler} id='form'>
          <div className="form-group">
            <input type="text" className="form-control" id="username" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" placeholder="Your email address" required/>
          </div>
          <div className="form-group">
            <textarea name="text" maxLength="1000" id="text" cols="30" rows="10" className="form-control" placeholder="your message" title="Pro-tip: resize this window by dragging the tiles in the bottom-corner" required></textarea>
          </div>
          <div className="form-group">
            <button id="form-submit" type="submit" className="btn-primary form-control">Send</button>
          </div>
        </form>
      </div>
    </main>
  )
}
export default Contact