import React, { Component } from 'react'
import PureComp from './PureComp'

class MyHeading extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title: "Welcome to React"
      }
    }

    titleHandler = () => {
      this.setState({title:"Welcome to React Pure Component"})
    }

  render() {

    const {title} = this.state

    return (
      <div>
        <h3>This is MyHeading component</h3>
        <strong>{title}</strong>
        {console.log(`Output of MyHeading component: ${title} `)}

        <button type="button" onClick={() => this.titleHandler()}>Change title</button>

        <PureComp title={title}></PureComp>
      </div>
    )
  }
}

export default MyHeading