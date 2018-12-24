import React, { Component } from 'react'
// import logo from './statics/logo.svg'
// import './App.css'
import { Router } from '@reach/router'
import stateContext from './state/context'

// page
import Index from './pages/index'
import Dataset from './pages/dataset'
import Model from './pages/model'
import ServerApi from './pages/server-api'
import Train from './pages/train'
import Welcome from './pages/welcome'

// header
import Header from './components/header'

class App extends Component {
  static contextType = stateContext

  componentDidMount() {
    // console.log(this.context)
  }
  render() {
    return (
      <>
        <Header />
        <Router>
          <Index path="/" />
          <Dataset path="dataset" />
          <Model path="model" />
          <ServerApi path="server-api" />
          <Train path="train" />
          <Welcome path="welcome" />
        </Router>
      </>
    )
  }
}

export default App
