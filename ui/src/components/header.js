import React from 'react'
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { Link } from '@reach/router'
import stateContext from '../state/context'

import './header.css'

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

export default class Header extends React.Component {
  static contextType = stateContext
  state = {}

  render() {
    const { user } = this.context.state
    const { loginWithGoogle, logout } = this.context.action
    return (
      <>
        <Navbar light expand="md" className="bg-header">
          <Link to="/" className="navbar-brand">
            Obi by Web1m
          </Link>

          <Nav className="ml-auto" navbar>
            {!user ? (
              <button
                type="button"
                className="btn btn-icon btn-primary btn-secondary"
                onClick={loginWithGoogle}
              >
                <i className="fe fe-log-in mr-2" />
                Login with Google
              </button>
            ) : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Setting</DropdownItem>
                  <DropdownItem>Billing</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Navbar>
        <div className="row align-items-center header-item">
          <div className="col-lg order-lg-first">
            <ul className="nav nav-tabs border-0 flex-column">
              <li className="nav-item">
                <NavLink to="/welcome">Welcome</NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink to="/dataset">Dataset</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/train">Train</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/model">Model</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/serving">Model API</NavLink>
              </li>
            </ul>
          </div>{' '}
        </div>
      </>
    )
  }
}
