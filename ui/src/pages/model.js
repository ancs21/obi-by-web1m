import React, { Component } from 'react'
import NavLinkHead from '../components/NavLinkHead'

class Model extends Component {
  state = {}
  render() {
    return (
      <>
        <NavLinkHead id={this.props.id} />
        <h1>Model</h1>
      </>
    )
  }
}

export default Model
