import React from 'react'

class TypeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            typed: ''
        }
        this.updateText = this.updateText.bind(this)
    }

    updateText (event) {
        this.setState(state => ({
            typed: event.target.value
        })
        )
    }
    render () {
        return (
            <div>
            <input type="text" onChange = {this.updateText} />
            <h1>{this.state.typed}</h1>
            </div>
        )
    }
}

export default TypeForm