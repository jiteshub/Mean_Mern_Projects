import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incHandler = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h4>This is a Counter Component</h4>
                {/* <p>User name is <strong>{this.props.render(true)}</strong></p> */}
                {this.props.render(this.state.count, this.incHandler)}
            </div>
        )
    }
}

export default Counter