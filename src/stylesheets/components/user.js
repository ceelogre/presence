class user extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <h1>I am a user really?</h1>
            </div>
        )
    }
}
const Items = props => {
    return <h1>props.quantiy</h1>
}
Items.defaultProps = {
    name: 'No name'
}
Items.propTypes = {
    quantity: PropTypes.number.isRequired
}

class ReturnTempPassword extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>Temp key is: {this.props.tempKey}</div>
        )
    }
}

class ResetPassword extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <h1>We've generated a temporary password for you.</h1>
            <strong> <ReturnTempPassword tempKey = { 'awBrok8.'} /></strong>
            <h3>Reset your key asap</h3>

        )
    }
}