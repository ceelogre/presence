import React from "react";
import { Link , Switch, Route} from 'react-router-dom'
import ChangingRemote from '../../articles/changing-remote'

// create a class declaration
class Thoughts extends React.Component {
  // render method
  render() {
    return (
      <main className="thoughts">
        <h3>Thoughts</h3>
        <p>
          Welcome to my Thoughts section. Here, You'll find anything from tech to trading to health. Enjoy!
        </p>
        <section>
          <Link to="/thoughts/2>1">Bash output manipulation</Link>
          <Link to="/thoughts/git-remote">Changing the remote </Link>
          <Link to='/thoughts/heroku'> Heroku </Link>
          <Link to='/thoughts/radar'>Traffic Police Radar</Link>
          <Link to='/thoughts/se'>Stock Exchange</Link>
          <Link to='/thoughts/git-rebase'>Rebasing</Link>
          
        </section>
        <Switch>

               ./ <Route path='/thoughts/git-remote'   component={ChangingRemote} />
        </Switch>
      </main>
    );
  }
}
// export Thoughts class as ThoughtsIndex
export default Thoughts
