import React from 'react'
import stateContext from './context'
import firebase from '../utils/fb'

export const stateConsumer = stateContext.Consumer

class StateProvider extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        })
      } else {
        // No user is signed in.
      }
    })
  }

  loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user
        this.setState({
          user
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { user } = this.state
    return (
      <stateContext.Provider
        value={{
          state: {
            user
          },
          action: {
            loginWithGoogle: this.loginWithGoogle,
            logout: this.logout
          }
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    )
  }
}

export default StateProvider
