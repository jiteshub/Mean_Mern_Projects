import React, { Component } from 'react'

export class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            adminLogin: false
        }
    }


    render() {

        const { adminLogin } = this.state

        return adminLogin && <h2>Welcome Admin</h2>


       // return adminLogin ? <h2>Welcome Admin</h2> : <h2>Welcome User</h2>
        
        // let message
        // if (adminLogin) {
        //     message = <h2>Welcome Admin</h2>
        // } else {
        //     message = <h2>Welcome User</h2>
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

    }
}

export default ConditionalRendering