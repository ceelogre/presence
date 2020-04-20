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
                    {this.state.items}
                </ul>
                <input type="text" />
            </div>
        )
    }
}

export default ToDo