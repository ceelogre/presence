import React from 'react'

class ToDo extends React.Component {
    componentDidMount() {
        this.state = {
            items: ''
        }
    }
    render () {
        return (
            <div>
                <ul>
                </ul>
                <input type="text" />
            </div>
        )
    }
}

export default ToDo