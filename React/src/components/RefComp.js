import React, { Component } from 'react'

class RefComp extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef() // Step 1

    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        //console.log("clicked...")
        console.log("Value: " + this.inputRef.current.value)
    }

    render() {
        return (
            <>
                <h1>Refs Demo</h1>
                <form>
                    <label>Use of Refs</label>

                    {/* Step 2 */}
                    <input type="text" ref={this.inputRef}></input>

                    <button type="button" onClick={() => this.clickHandler()}>Get Input</button>
                </form>
            </>
        )
    }
}

export default RefComp