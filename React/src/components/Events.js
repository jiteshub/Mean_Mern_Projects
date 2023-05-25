import React, { Component } from 'react'

class Events extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         count2: 0
      }
    }

  changeCounter(){
      //console.log("clicked!!")
      this.setState( (prevState) => ({count: prevState.count + 1}) )
  }

  changeCounter2(){
    this.setState( (prevState) => ({count2: prevState.count2 + 5}) )
  } 

  render() {
    const {count, count2} = this.state
    return (
      <div>
          <h4>This is Events (Class) Component</h4>
          <button onClick={ () => this.changeCounter() } >Counter value is <strong>{count}</strong></button>

          <h3 onMouseOver={ () => this.changeCounter() }>Hover over me to change the value {count2}</h3>

      </div>
    )
  }
}

export default Events