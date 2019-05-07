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
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
    margin: 1% auto;
  }
`

const Img = styled.img`
  width: 20%;
  height: 24vh;
  border-radius: 8px;
  @media only screen and (max-width: 600px) and (min-width: 300px) {
    width: 20%;
    height: 13vh;
    margin: 1%;
  }
  @media only screen and (max-width: 700px) and (min-width: 601px) {
    width: 24%;
    height: 20vh;
  }
`

const SideNav = styled.div`
  display: flex;
  width: 100%;
`

const Menu = styled.div`
  display: flex;
  width: 100%;
`

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
`

const MenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    padding: 1%;
  }
`

const Li = styled.a`
  margin: 2%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1.5%;
`

const Button = styled.button`
  border-radius: 25px;
  color: white;
  border: none;
  outline: none;
  font-weight: 500;
  background: #52c4b9;
  height: 68px;
  width: 90px;
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
              <Img src={Logo} alt='Logo' />
              <MenuList>
                <Li>
                  <Link to='/'>Dashboard</Link>
                </Li>
                <Li className='listItem'>
                  <Link to='/settings'>Settings</Link>
                </Li>
                <Li className='listItem'>
                  <Link to='/pricing' className='style-link'>
                    Premium
                  </Link>
                </Li>

                <Li className='listItem'>
                  <Link to='/rsvp' className='style-link'>
                    RSVP
                  </Link>
                </Li>
                <Li className='listItem'>
                  <Link to='/guests' className='style-link'>
                    Guests
                  </Link>
                </Li>
                <Li className='listItem'>
                  <Link to='/design' className='style-link'>
                    Design
                  </Link>
                </Li>
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
