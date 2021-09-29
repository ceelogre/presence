import React from 'react'
import App  from './app'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Thoughts from './components/thoughts/index.js'
import Work from './components/work/index'
import ChangingRemote from './articles/changing-remote'
import Header from './components/header'
import fourOfour from './components/404'
const Paths = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/thoughts/git-remote'   component={ChangingRemote} />
                <Route path='/thoughts' component={Thoughts} />
                <Router path='/work' component={Work} />
                <Route path='/' exact component={App} />
                <Route component={fourOfour} />

            </Switch>
        </Router>
    )
}
export default Paths