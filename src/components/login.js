import React from 'react'

class userLogin extends React.Component {
    render () {
        return (
            <div>
                <form style={{background: '#f9f9f9'}}>
                    <p>RightAuth </p>
                    <input type="text" /> <br />
                    <input type="password" /><br />
                    <button type='submit'>Login</button><br />
                </form>
            </div>
        )
    }
}
export default userLogin