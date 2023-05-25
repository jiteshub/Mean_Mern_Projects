import React, { Component } from 'react'
import HOC from './HOC'

class Comp1 extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementHandler() {
    //     this.setState({ count: this.state.count + 1 })
    // }

    render() {

       // const { count } = this.state

        const{incrementHandler, count} = this.props

        return (
            <div>
                <h2>Comp1 - Click counter</h2>
                <h3>Counter value - {count} </h3>
                <button onClick={() => incrementHandler()} >Click</button>
            </div>
        )
    }
}

export default Comp1
//export default HOC(Comp1, 1)