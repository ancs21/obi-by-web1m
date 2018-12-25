import React, { Component } from 'react'
// import logo from './statics/logo.svg'
// import './App.css'
import { Router } from '@reach/router'
import stateContext from './state/context'

// page
import Index from './pages/index'
import Dataset from './pages/dataset'
import Model from './pages/model'
import Serving from './pages/serving'
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
      <React.Fragment>
        <Header />
        <Router>
          <Index path="/" />
          <Dataset path="dataset" />
          <Model path="model" />
          <Serving path="serving" />
          <Train path="train" />
          <Welcome path="welcome" />
        </Router>
      </React.Fragment>
    )
  }
}

export default App
