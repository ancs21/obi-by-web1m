import React from 'react'
import stateContext from './context'

export const stateConsumer = stateContext.Consumer

class StateProvider extends React.Component {
  state = {
    hello: 'world'
  }

  render() {
    return (
      <stateContext.Provider
        value={{
          hello: this.state.hello
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    )
  }
}

export default StateProvider
