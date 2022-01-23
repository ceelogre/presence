import React from 'react'

class ChangingRemote extends React.Component {
  render() {
    return (
      <div>
        <h2> Changing Remote</h2>
        <h3>Problem: I wanted to create a copy of a repository without forking it.</h3>

          <p>Approach: I went ahead and cloned the repo on my PC. Second, I created a new repository that I will be pushing to under my github account. The last thing was to point the local project to my remote instead of the original remote.</p>

          <p>I tried a couple of ways:</p>

          <p><code>git remote show</code> showed me information about where I'm pushing to.
          <code> git remote rename old_uri new_uri </code> seemed to be the answer I was looking but I was hit with an error <code> fatal: remote is not available</code>. At that point, I knew that it's probably there to change remote names like origin not the actual URI.</p>

          <p>After a couple of trial and errors while running through git remote manual, I  eventually came across the command that I was looking for:
            <code>git remote set-url --push name new_uri</code>
          </p>

          <p>There are other options like <code> --delete </code> which would do half of what I was looking for: removing the pointer to the remote uri but I went ahead and created the whole thing in one line.</p>

          <p>Next time I come across this, I'll just lie to myself that I will remember how to do it without looking at this article.</p>
            </div>
      )
  }
}
export default ChangingRemote