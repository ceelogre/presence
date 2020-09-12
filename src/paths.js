import React from 'react'
import App  from './app'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import  Thoughts  from './components/thoughts'
import Sunshine from './components/sunshine'

const Paths = () => {
    return (
        <Router>
            <Switch>
                <Route path='/thoughts' component={Thoughts} />
                <Route path='/' exact component={App} />
                <Route path="/shoulder" exact  component={Sunshine} />
            </Switch>
        </Router>
    )
}
export default Paths