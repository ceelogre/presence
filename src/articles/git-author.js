import React from 'react-dom'

const AuthorReset = () => {
    return (
        <div>
            <h1>Git reset author</h1>
            <p>As it turns out, you can reset the author a commit. I learned about this a few days ago while comitting from a new machine that I haven't setup the authors.</p>
            <img src='../assets/git-reset-author.png' alt="A screenshot of git reset author message"></img>
            <p>After committing, you can set the new global username and email</p>
            <code>git config --global user.name ...</code>
            <code>git config --global user.email ...</code>
            <p>After this, you can reset the author using:</p>
            <code>git commit --amend --reset-author</code>
            <p>NOTE: this will reset the author of the last commit you made, if you want to reset a specific commit you will have to provide its hash (I did not test this but this is typically, the expected behavior with git).</p>
            <p>There are other ways this could be done</p>
            <code>git commit --amend --author=&quot;&lt;new-name&gt; &lt;new-author&gt;&quot;</code>
        </div>
    )
}