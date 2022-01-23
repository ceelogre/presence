import React from "react";
import { Link , Switch, Route} from 'react-router-dom'
import ChangingRemote from '../../articles/changing-remote'
import BashManipulation from "../../articles/2>&1";
import HerokuConfig from '../../articles/heroku'
import '../../stylesheets/components/thoughts.scss'

// create a class declaration
class Thoughts extends React.Component {
  // render method
  render() {
    return (
      <main className="thoughts">
        <h3>Technical writing</h3>
        <p>
          Welcome to my Thoughts section. This is my writing area, You'll find anything from tech to trading to health. Enjoy!
        </p>
        <section>
          <Link to="/thoughts/2>1">Bash output manipulation</Link> <br/>
          <Link to="/thoughts/git-remote">Changing the remote </Link> <br/>
          <Link to='/thoughts/heroku'> Heroku </Link> <br/>
          <Link to='/thoughts/radar'>Traffic Police Radar</Link><br />
          <Link to='/thoughts/se'>Stock Exchange</Link><br></br>
          <Link to='/thoughts/git-rebase'>Rebasing</Link><br />
          
        </section>
        <Switch>
               <Route path='/thoughts/git-remote'   component={ChangingRemote} />
               <Route path='/thoughts/2>1' component={BashManipulation} />
               <Route path='/thoughts/heroku' component={HerokuConfig} />
        </Switch>
      </main>
    );
  }
}
// export Thoughts class as ThoughtsIndex
export default Thoughts
