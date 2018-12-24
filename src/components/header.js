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
  state = {}

  render() {
    return (
      <>
        <Navbar light expand="md" className="bg-header">
          <Link to="/" className="navbar-brand">
            Obi by Web1m
          </Link>

          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Setting</DropdownItem>
                <DropdownItem>Billing</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
                <NavLink to="/server-api">Server Api</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}
