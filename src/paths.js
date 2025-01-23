import React from 'react'
import App  from './app'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Thoughts from './components/thoughts/index.js'
import WorkIndex from './components/work/index'
import Header from './components/header'
import fourOfour from './components/404'
import Contact from './components/contact'
import Resume from './components/resume.js'

const Paths = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/work' component={WorkIndex} />
                <Route path='/thoughts' component={Thoughts} />
                <Route path='/' exact component={App} />
                <Route path='/assets/resume' render={() => {
                    window.location.href = '/public/resume.pdf'
                }} />

                <Route component={fourOfour} />

            </Switch>
        </Router>
    )
}
export default Paths