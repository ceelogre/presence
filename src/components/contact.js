import React from 'react'
import '../stylesheets/components/contact.scss'

const Contact = () => {
  return (
    <main>
      <h3>Contact page</h3>
      <section>
        <p>Wanna get in touch? Use the form below</p>
      </section>
      <div class="form-card">
        <form onsubmit="return" id='form'>
          <div class="form-group">
            <input type="text" class="form-control" id="username" placeholder="Name" />
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Your email address" required/>
          </div>
          <div class="form-group">
            <textarea name="text" maxlength="1000" id="text" cols="30" rows="10" class="form-control" placeholder="your message" title="Pro-tip: resize this window by dragging the tiles in the bottom-corner" required></textarea>
          </div>
          <div class="form-group">
            <button id="form-submit" type="submit" class="btn-primary form-control">Send</button>
          </div>
        </form>
      </div>
    </main>
  )
}
export default Contact