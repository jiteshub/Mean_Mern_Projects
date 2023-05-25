import React, { Component } from 'react'

export class Color extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                { id: 1, name: "Red" },
                { id: 2, name: "Green" },
                { id: 3, name: "Blue" },
                { id: 4, name: "Pink" }
            ]
        }
    }


    render() {

        const {colors} = this.state

        return (
            <div>
                <h2>This is a Color component</h2>

                <ul>
                    {
                        colors.map( (e) => {
                            //console.log(e)
                            return <li key={e.id}>{e.name}</li>
                        })    
                    }
                </ul>


            </div>
        )
    }
}

export default Color