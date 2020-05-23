import React from 'react'
import '../stylesheets/components/footer.scss'
import { Layout } from 'antd'

const { Footer } = Layout
class Footer_ extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <p className='text-center'>Made with <span className="love"> &#10084; &#x2764;</span> in Kigali </p>
            </Footer>
        )
    }
}
export default Footer_