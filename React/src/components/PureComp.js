import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

  render() {
    return (
      <div>
          <h3>This is Pure component</h3>
          {console.log(`Output of PureComponent: ${this.props.title} `)}
      </div>
    )
  }
}

export default PureComp