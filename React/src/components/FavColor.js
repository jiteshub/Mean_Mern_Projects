import React, { Component } from 'react'

export class FavColor extends Component {

  constructor(props) {
    super(props)
    //console.log("Constructor called...")
    this.state = {
      color: "Red"
    }
  }

  // Life cycle method

  /*  static getDerivedStateFromProps(props) {
      console.log("getDerivedStateFromProps called...")
      return {
        color: props.color
      }
    }
  */

  // Based on some condition you can decide whether your component should be updated or not
  // shouldComponentUpdate(){
  //   return false
  // }

  // componentDidMount(){
  //   console.log("Component is mounted successfully")
  //   setTimeout(() => (this.setState({color:"Blue"})), 3000);
  // }

  //Returns the old value of state or props 
  // getSnapshotBeforeUpdate(props, state) {
  //     document.getElementById("before").innerHTML = "My fav color was : " + state.color
  // }

  //Returns the updated value of state or props 
  // componentDidUpdate() {
  //   document.getElementById("after").innerHTML = "My fav color is: " + this.state.color
  // }

  colorChangeHandler = () => {
    this.setState({ color: "Pink" })
  }

  render() {
    const { color } = this.state
    return (
      <div>
        <h2>My favorite color is {color}</h2>

        <button onClick={() => this.colorChangeHandler()} >Change color</button>

        <div id="before"></div>
        <div id="after"></div>

      </div>
    )
  }
}

export default FavColor