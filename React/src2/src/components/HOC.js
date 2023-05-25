import React, { Component } from 'react'

const HOC = (WrapperComp, value) => {

    class HOCComp extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0 
          }
        }

        incHandler = () => {
            this.setState({ count: this.state.count + value })
        }
    
        render(){

            return <WrapperComp {...this.props} incrementHandler={this.incHandler} count={this.state.count}></WrapperComp>

        }


    }

  return HOCComp
}

export default HOC