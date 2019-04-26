import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './sidenav.css'

// page imports
import Pricing from '../pricing/Pricing'
import RSVP from '../rsvp/rsvp'
import Billing from '../pages/billing'
import Settings from '../pages/settings'
import Home from '../pages/Home'
import GuestList from '../rsvp/GuestList'
import Exit from '../pages/exit'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { logout } from '../../actions'

import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  border-radius: 5%;
  color: black;
  border: none;
  outline: none;
  border-radius: 25px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  width: 70%;
  align-self: center;
  justify-content: center;
  margin-bottom: 10px;
`

class Navigation extends Component {
  handleClick = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='navPage'>
        <h3 className='menuLogo' />
        {/* //Logo */}
        <div className='sideNav'>
          <div className='menu'>
            <div>
              <ul className='menuList'>
                <li className='listItem'>
                  <Link to='/' className='style-link'>
                    DASHBOARD
                  </Link>
                </li>
                <li className='listItem'>
                  <Link to='/settings' className='style-link'>
                    Settings
                  </Link>
                </li>
                <li className='listItem'>
                  <Link to='/pricing' className='style-link'>
                    Pricing
                  </Link>
                </li>
                <li className='listItem'>
                  <Link to='/billing' className='style-link'>
                    Billing
                  </Link>
                </li>
                <li className='listItem'>
                  <Link to='/rsvp' className='style-link'>
                    RSVP
                  </Link>
                </li>
                <li className='listItem'>
                  <Link to='/guests' className='style-link'>
                    Guests
                  </Link>
                </li>
                <li className='listItem'>
                  <Link to='/design' className='style-link'>
                    Design
                  </Link>
                </li>
              </ul>
              <Button onClick={this.handleClick}>Sign Out</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {}

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Navigation)
)
