import React  from 'react'
import panda from '../assets/images/pandaTree.jpeg'

class Body extends React.Component {
    render () {
        return (
            <div className="body">
                <div className="coming-soon">
                    <img src= {panda} />
                </div>
            </div>
        )
    }
}

export default Body