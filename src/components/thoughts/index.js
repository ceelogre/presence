import React from "react";
import { Link } from 'react-router-dom'

// create a class declaration
class Thoughts extends React.Component {
  // render method
  render() {
    return (
      <div className="thoughts">
        <h3>Thoughts</h3>
        <p>
          Welcome to my Thoughts section. Here, You'll find anything from tech to trading to health. Enjoy!
        </p>
        <section>
          <Link to="/articles/2>1">Bash output manipulation</Link>
          <Link to="/articles/git-remote">Changing the remote </Link>
          <Link to='/articles/heroku'> Heroku </Link>
          <Link to='/articles/radar'>Traffic Police Radar</Link>
          <Link to='/articles/se'>Stock Exchange</Link>
          <Link to='/articles/git-rebase'>Rebasing</Link>
          
        </section>
      </div>
    );
  }
}
// export Thoughts class as ThoughtsIndex
export default Thoughts
