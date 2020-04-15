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
                <button className="btn btn-info" onClick = { this.toggleView }>I fall apart</button>
                {/* <div  className = 'loading-animation' style = {{ visibility: this.state.isVisible }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
                <div className = 'svg-spinner'>
                    <svg  className='slide'>
                        <rect >
                            <animate />
                        </rect>
                        <circle  cx = '50' cy = '50' r = '45' fill = 'teal'>
                            <animate attributeName = 'r' values='0; 30; 0' dur='10s' repeatCount = 'indefinite' />
                            <animate attributeName = 'fill' values= 'teal;red;rose;cyan' dur='2s' repeatCount = 'indefinite' />
                        </circle>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Body