import React  from 'react'
import '../stylesheets/components/body.scss'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.state = ({
            isVisible: 'visible'
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
                {/* <button onClick = { this.toggleView }>I fall apart</button> */}
                {/* <div  className = 'loading-animation' style = {{ visibility: this.state.isVisible }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
                <div className = 'svg-spinner'>
                    <svg height = '100' width = '100'>
                        <circle cx = '50' cy = '50' r = '45' fill = 'teal'>
                            <animate attributeName = 'r' values='0; 10; 30; 10; 0' dur='10s' repeatCount = 'indefinite' />
                        </circle>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Body