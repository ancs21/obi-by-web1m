import React, { Component } from 'react'
import NavLinkHead from '../components/NavLinkHead'

class Serving extends Component {
  state = {}
  render() {
    return (
      <>
        <NavLinkHead id={this.props.id} />
        <h1>Model API</h1>
      </>
    )
  }
}

export default Serving
