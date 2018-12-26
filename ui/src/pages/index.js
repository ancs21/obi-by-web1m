import React, { Component } from 'react'

import stateContext from '../state/context'
import NewProject from '../components/newproject'
import { Link } from '@reach/router'

class Index extends Component {
  static contextType = stateContext

  state = {}

  render() {
    const { user, projects } = this.context.state
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
              <NewProject />
            </div>

            <div className="row row-cards">
              {projects.length > 0 &&
                projects.map(project => (
                  <div
                    className="col-sm-6 col-xl-4 project-card"
                    key={project.id}
                  >
                    <Link
                      onClick={() =>
                        this.context.action.addProjectIdClicked(project.id)
                      }
                      to={`projects/${project.id}`}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">{project.name}</h3>
                          <div className="card-options">
                            <button className="btn btn-secondary btn-sm ml-2">
                              Edit
                            </button>
                          </div>
                        </div>
                        <div className="card-body">{project.description}</div>
                        <div className="card-footer">Get started</div>
                      </div>
                    </Link>
                  </div>
                ))}

              <div className="col-sm-6 col-xl-4" />
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Index
