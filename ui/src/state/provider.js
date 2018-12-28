import React from 'react'
import stateContext from './context'
import firebase from '../utils/fb'
import { collectionData } from 'rxfire/firestore'
import { tap } from 'rxjs/operators'

export const stateConsumer = stateContext.Consumer

class StateProvider extends React.Component {
  state = {
    user: null,
    projects: []
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        })
        const projectsRef = firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .collection('projects')

        collectionData(projectsRef, 'id')
          .pipe(tap(projects => console.log('Connect db success!')))
          .subscribe(projects => {
            this.setState({
              projects
            })
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
    const { user, projects, projectIdClicked } = this.state
    return (
      <stateContext.Provider
        value={{
          state: {
            user,
            projects,
            projectIdClicked
          },
          action: {
            loginWithGoogle: this.loginWithGoogle,
            logout: this.logout,
            addProjectIdClicked: this.addProjectIdClicked
          }
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    )
  }
}

export default StateProvider
