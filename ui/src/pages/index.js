import React, { Component } from 'react'
import stateContext from '../state/context'

class Index extends Component {
  static contextType = stateContext

  state = {}
  render() {
    const { user } = this.context.state

    return (
      <>
        {user && (
          <div className="container">
            <div className="index-head mt-5 mb-7">
              <span
                className="avatar avatar-xxl mb-4"
                style={{ backgroundImage: `url(${user.photoURL})` }}
              />
              <h2> Welcome, {user.displayName}</h2>
            </div>

            <div className="row row-cards">
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">People counter</h3>
                    <div className="card-options">
                      <button className="btn btn-secondary btn-sm ml-2">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam deleniti fugit incidunt, iste, itaque minima neque
                  </div>
                  <div className="card-footer">Get started</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Index
