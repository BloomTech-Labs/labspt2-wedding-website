import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
import Logo from '../../Images/logo.png'

import styled from 'styled-components'

const NavPage = styled.div`
  display: flex;
  margin: 3% auto;
  width: 80%;
  background: white;
  border-radius: 8px;
  justify-content: space-evenly;
`

const Img = styled.img`
  width: 20%;
  height: 24vh;
  border-radius: 8px;
`

const SideNav = styled.div`
  display: flex;
`

const Menu = styled.div`
  display: flex;
`

const MenuWrapper = styled.div`
  display: flex;
`

const MenuList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Li = styled.a`
  color: black;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3%;
`

const Button = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  font-weight: 500;
  background: #52c4b9;
  height: 68px;
`

class Navigation extends Component {
  handleClick = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <NavPage>
        <SideNav>
          <Menu>
            <MenuWrapper>
              <Img src={Logo} alt="Logo" />
              <MenuList>
                <Li>
                  <Link to='/'>
                    Dashboard
                  </Link>
                </Li>
                <li className='listItem'>
                  <Link to='/settings'>
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
              </MenuList>
              <ButtonWrapper>
              <Button onClick={this.handleClick}>Sign Out</Button>
              </ButtonWrapper>
            </MenuWrapper>
          </Menu>
        </SideNav>
      </NavPage>
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
