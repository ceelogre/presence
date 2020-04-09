import React  from 'react'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.state = ({
            isVisible: 'hidden'
        })
    }
    toggleView () {
        this.setState((state) => ({
            isVisible: this.state.isVisible == 'hidden' ? 'visible': 'hidden'
            })
        )
    }
    render () {
        return (
            <div className="body">
                <button onClick = { this.toggleView }>I fall apart</button>
                <h2 style = {{ visibility: this.state.isVisible }}>Antidote</h2>
            </div>
        )
    }
}

export default Body