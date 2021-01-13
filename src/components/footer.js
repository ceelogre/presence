import React from 'react'
import '../stylesheets/components/footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p className='text-center'>Made with <span className="love"> &#10084; &#x2764;</span> in Kigali </p>
            </div>
        )
    }
}
export default Footer