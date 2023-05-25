import React, { Component } from 'react'

class User extends Component {




  render() {

    const { name } = this.props

    if ( name === "abc"){
      throw new Error("Invalid user name...")
    }

    return (
      <h2>I am {name}</h2>
    )
  }
}

export default User