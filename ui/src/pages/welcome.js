import React, { Component } from 'react'
import NavLinkHead from '../components/NavLinkHead'

class Welcome extends Component {
  state = {}
  render() {
    const { id } = this.props

    return (
      <>
        <NavLinkHead />
        <h1>Wellcome</h1>
      </>
    )
  }
}

export default Welcome
