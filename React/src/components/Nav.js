import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
          <Button variant="warning"> <i className="fa fa-home" aria-hidden="true"></i>
 <Link to=''>Home</Link> </Button>{' '}
          <Button variant="warning"> <Link to='/about'>About</Link> </Button>{' '}
          <Button variant="warning"> <Link to='/color'>Color</Link> </Button>{' '}
          <Button variant="warning"> <Link to='/my-heading'>My Heading</Link> </Button>{' '}
          <Button variant="warning"> <Link to='/purecomp'>PureComp</Link> </Button>{' '}

          <Button variant="warning"> <Link to='/formval'>FormVal</Link> </Button>{' '}

      </div>
    )
  }
}

export default Nav