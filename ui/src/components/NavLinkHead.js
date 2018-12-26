import React from 'react'
import { Link } from '@reach/router'
import stateContext from '../state/context'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'nav-link active' : 'nav-link'
      }
    }}
  />
)
class NavLinkHead extends React.Component {
  static contextType = stateContext

  render() {
    const { projectIdClicked } = this.context.state
    return (
      <div className="row align-items-center header-item">
        <div className="col-lg order-lg-first">
          <ul className="nav nav-tabs border-0 flex-column">
            <li className="nav-item">
              <NavLink to="">Welcome</NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink to={`/projects/${projectIdClicked}/dataset`}>
                Dataset
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="train">Train</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="model">Model</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="serving">Model API</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavLinkHead
