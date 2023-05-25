import React, { Component } from 'react'

class FormVal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            term: false
        }
    }


    inputChangeHandler = (event) => {
        //console.log('input changed...')
        // this.setState
        // console.log(event)

        const { type, name, value, checked } = event.target
        // console.log(type)
        // console.log(name)
        // console.log(value)
        // console.log(checked)

        this.setState({
             [name] : type === "checkbox" ? checked : value   
        })

    }

    submit = (event) => {

      // alert(this.state.fname + ", " + this.state.lname + ", " + this.state.term )
       
        if(this.state.fname === ''){
            alert('First name is required')
            event.preventDefault()
            return false
        }

        var pattern="[a-zA-Z]{3,10}"
        if(!this.state.fname.match(pattern)){
            alert('First name should be between 3-10 letters only')
            event.preventDefault()
            return false  
        }

        // Write the code for the lname
        
        if(this.state.term === false){
            alert('You must agree to the terms and conditions!')
            event.preventDefault()
            return false
        }


    }


    render() {
        return (
            <div>
                <form onSubmit = { (e) => this.submit(e)}>
                    <div>
                        <strong>Enter First Name: </strong>
                        <input type="text" name="fname" onChange={(e) => this.inputChangeHandler(e)}></input>
                    </div>
                    <div>
                        <strong>Enter Last Name: </strong>
                        <input type="text" name="lname" onChange={(e) => this.inputChangeHandler(e)}></input>
                    </div>
                    <div>
                        <input type="checkbox" name="term" onChange={(e) => this.inputChangeHandler(e)}></input>
                        <strong>Enter Last Name: </strong>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>


                </form>

            </div>
        )
    }
}

export default FormVal