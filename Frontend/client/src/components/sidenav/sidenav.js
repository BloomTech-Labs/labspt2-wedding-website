import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import MenuBTN from './hamburger.png';

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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
    margin: 1% auto;
  }
`

const Img = styled.img`
  width: 20%;
  border-radius: 50%;
  @media only screen and (max-width: 600px) and (min-width: 300px) {
    width: 30%;
    margin: 1%;
  }
  @media only screen and (max-width: 700px) and (min-width: 601px) {
    width: 24%;
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
    display: none;
  }
`

const Li = styled.a`
  margin: 2%;
  font-size: 1rem;
  text-shadow: 1px 1px 1px #000000
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
  font-size: x-large;
  background: #52c4b9;
  height: 80px;
 width: 130px;
`

const ImgMenu = styled.img`
  width: 90%;
  height: 50px;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const Phonediv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

const PopMenuList = styled.div`
  display: flex;
  flex-direction: column;
`

const Mbutton = styled.button`
  Border: 0;
  padding: 0;
  border-radius: 50%;
  width: 12%;
  height: auto;
  background: none;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

class Navigation extends Component {
  constructor() {
    super();

    this.state ={
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

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
              <Phonediv>
              <Img src={Logo} alt='Logo' />
              <Mbutton onClick={this.showMenu}>
              <ImgMenu src={MenuBTN} alt="Menu Button" />
              </Mbutton>
              {
                this.state.showMenu
                ? (
                <PopMenuList>
                <Li>
                  <NavLink exact path to='/' activeStyle={{ textDecoration: 'underline' }}>Dashboard</NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/settings' activeStyle={{ textDecoration: 'underline' }}>Settings</NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/pricing' activeStyle={{ textDecoration: 'underline' }}>
                    Premium
                  </NavLink>
                </Li>

                <Li className='listItem'>
                  <NavLink to='/rsvp' activeStyle={{ textDecoration: 'underline' }}>
                    RSVP
                  </NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/guests' activeStyle={{ textDecoration: 'underline' }}>
                    Guests
                  </NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/design' activeStyle={{ textDecoration: 'underline' }}>
                    Design
                  </NavLink>
                </Li>
              </PopMenuList>
                )
                : (
                  null
                )
              }
              <MenuList>
                <Li>
                  <NavLink exact path to='/' activeStyle={{ textDecoration: 'underline' }}>Dashboard</NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/settings' activeStyle={{ textDecoration: 'underline' }}>Settings</NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/pricing' activeStyle={{ textDecoration: 'underline' }}>
                    Premium
                  </NavLink>
                </Li>

                <Li className='listItem'>
                  <NavLink to='/rsvp' activeStyle={{ textDecoration: 'underline' }}>
                    RSVP
                  </NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/guests' activeStyle={{ textDecoration: 'underline' }}>
                    Guests
                  </NavLink>
                </Li>
                <Li className='listItem'>
                  <NavLink to='/design' activeStyle={{ textDecoration: 'underline' }}>
                    Design
                  </NavLink>
                </Li>
              </MenuList>
              <ButtonWrapper>
                <Button onClick={this.handleClick}>Sign Out</Button>
              </ButtonWrapper>
              </Phonediv>
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
