import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: 'Yash',
         post: 'React Developer',
         msgFromChild: ''
      }
    }

    incrementCounter = (msg) => {
        this.setState( (prevState) => ({count: prevState.count + 1}))
        this.setState( () => ({msgFromChild: msg}))
    }

    render() {

        // de-structure the state
        const {count, name, post, msgFromChild} = this.state

        return (
            <div>
                <h2>Parent Component</h2>
                <div>Counter value is { count }</div>
                <div>I am {name}, working as a {post}</div>

                <button onClick={ () => this.incrementCounter() }>Increment</button>
                <div>Message from child: {msgFromChild}</div>
                <hr></hr>

                <Child counter={count} name={name} post={post} handler={this.incrementCounter} ></Child>

            </div>
        )
    }
}

export default Parent