import { Component } from 'react'

class ClassComp extends Component {

    constructor(){
        super()

        this.state = {
            count: 0
        }

        setTimeout(() => {
            //this.state.count = 10 // Do not modify the state like this !!! 
            // React will not know that the value has changed
            
            //this.setState({count: this.state.count + 2})
            //this.setState({count: this.state.count + 2})

            this.setState( (prevState) => ({count: prevState.count + 2}) )
            this.setState( (prevState) => ({count: prevState.count + 2}) )
        }, 3000);

    }


    render() {
        const {name, city} = this.props // de-structure the props
        const {count} = this.state // de-structure the state
        return (
            <>
                <h3>This is a class component</h3>
                <p>Welcome {name} from {city} </p>
                <button>The count is { count }</button>
            </>
        )
    }

}

export default ClassComp