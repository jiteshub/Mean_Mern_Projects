import React, { Component } from 'react'
import HOC from './HOC'

class Comp2 extends Component {

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

        //const { count } = this.state
        const{incrementHandler, count} = this.props
        return (
            <div>
                <h2>Comp2 - Hover counter</h2>
                <h3>Counter value - {count} </h3>
                <p onMouseOver={() => incrementHandler()} >Hover to change the value</p>
            </div>
        )
    }
}

export default Comp2
//export default HOC(Comp2, 5)