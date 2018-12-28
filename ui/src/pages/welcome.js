import React, { Component } from 'react'
import NavLinkHead from '../components/NavLinkHead'

class Welcome extends Component {
  state = {}
  render() {
    return (
      <>
        <NavLinkHead id={this.props.id} />
        <h1>Wellcome</h1>
      </>
    )
  }
}

export default Welcome
