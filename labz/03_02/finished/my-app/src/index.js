import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
    render() {
        console.log(this.props)
        return (            
            <div>
                <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
                <p>I'll check back with you in {this.props.minutes} minutes.</p>
            </div>
        )
    }
}

ReactDOM.render(<Message color="green" minutes={5} msg="How are you?" />, document.getElementById('root'))