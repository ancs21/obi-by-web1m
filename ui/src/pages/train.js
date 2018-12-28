import React, { Component } from 'react'
import NavLinkHead from '../components/NavLinkHead'

class Train extends Component {
  state = {}
  render() {
    return (
      <>
        <NavLinkHead id={this.props.id} />
        <h1>Train</h1>
      </>
    )
  }
}

export default Train
