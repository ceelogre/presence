import React from 'react'
import App  from './app'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Thoughts from './components/thoughts/index.js'
import ChangingRemote from './articles/changing-remote'
import Header from './components/header'
const Paths = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/thoughts' component={Thoughts} />
                <Route path='/articles/git-remote'   component={ChangingRemote} />
            </Switch>
        </Router>
    )
}
export default Paths