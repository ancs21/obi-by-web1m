import React from 'react'
import { Link } from '@reach/router'

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
const NavLinkHead = ({ id }) => (
  <div className="row align-items-center header-item">
    <div className="col-lg order-lg-first">
      <ul className="nav nav-tabs border-0 flex-column">
        <li className="nav-item">
          <NavLink to={`/projects/${id}`}>Welcome</NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink to={`/projects/${id}/dataset`}>Dataset</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to={`/projects/${id}/train`}>Train</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to={`/projects/${id}/model`}>Model</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to={`/projects/${id}/serving`}>Model API</NavLink>
        </li>
      </ul>
    </div>
  </div>
)
export default NavLinkHead
