import React, { Component } from 'react'

class ErrorBoundary extends Component {
  
   constructor(props) {
     super(props)
   
     this.state = {
        hasError: false
     }
   } 

   static getDerivedStateFromError(error){
       console.log(error)
       return {
        hasError: true
       }
   }
  
   componentDidCatch(error, errorInfo){
       console.log("Error: " + error)
       console.log("Error Description: " + errorInfo)
   }
  
  render() {
    if (this.state.hasError!= undefined && this.state.hasError) {
        // You can render any custom fallback UI
        return <h3>Unable to load data for this user</h3>
      }
    return this.props.children;     
  }
}

export default ErrorBoundary