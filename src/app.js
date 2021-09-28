import React from 'react'


import './stylesheets/base/base.scss'
import Footer_ from './components/footer'
import Body from './components/body'

class App extends React.Component {
    render() {
        return (
            <div className='layout'>
                <Body />
                <Footer_ />
            </div>
        )
    }
}
export default App