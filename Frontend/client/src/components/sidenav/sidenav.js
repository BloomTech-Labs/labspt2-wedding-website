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

import styled from 'styled-components'

const NavPage = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 0 15px;
  width: 20%;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`

const MenuLogo = styled.h3`
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0;
  padding: 25px 0;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    text-align: center;
    width: 100%;
  }
`

const SideNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  min-width: 150px;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
  }
`

const Menu = styled.nav`
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  height: 400px;
  padding: 0 40px 0 0;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
  }
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    padding: 0;
  }
`
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`

const MenuListItem = styled.li`
  display: flex;
  margin: 10px 0;
  text-align: center;
  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    display: flex;
    margin: 0 30px;
    text-align: center;
    padding: 0;
  }
  @media only screen and (max-width: 599px) {
    margin: 0 5px;
    padding: 0;
  }
`

// Unused
const RTStyles = styled.div`
  display: flex;
  width: 100%;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #ffffff;
`;

const STLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #010101;
`;

// const Button = styled.button`
//   display: flex;
//   border-radius: 5%;
//   color: black;
//   border: none;
//   outline: none;
//   border-radius: 25px;
//   font-size: 0.8em;
//   font-weight: 500;
//   background: #52c4b9;
//   width: 50%;
//   align-self: center;
//   justify-content: center;
//   margin-bottom: 10px;
// `

export default class Navigation extends Component {
    render() {
        return (
             <Router>
                    <NavPage>
                     <MenuLogo><StyledLink to="/">Home</StyledLink></MenuLogo>
                    <SideNav>
                        <Menu>
                            <div>
                                <MenuList>
                                    <MenuListItem><STLink to="/" >Home</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/settings" >Settings</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/pricing" >Pricing</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/billing" >Billing</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/rsvp" >RSVP</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/guestlist" >Guests</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/exit" >Logout</STLink></MenuListItem>
                                </MenuList>
                            </div>
                        </Menu>
                        <RTStyles>
                            <Switch>
                                <Route path="/settings" component={Settings} />
                                <Route path="/pricing" component={Pricing} />
                                <Route path="/billing" component={Billing} />
                                <Route path="/rsvp" component={RSVP} />
                                <Route path='/guestlist' component={GuestList}/>
                                <Route path='/exit' component={Exit}/>
                                <Route path="/" component={Home} />                              
                            </Switch>

                        </RTStyles>
                    </SideNav>
                    </NavPage>
             </Router>
        );
    }



// class Navigation extends Component {
//   handleClick = () => {
//     this.props.logout()
//     this.props.history.push('/')
//   }

//   render() {
//     return (
//       <NavPage>
//         <MenuLogo>
//           <StyledLink to='/'>Home</StyledLink>
//         </MenuLogo>
//         <SideNav>
//           <Menu>
//             <MenuContainer>
//               <MenuList>
//                 <MenuListItem>
//                   <STLink to='/pricing'>Pricing</STLink>
//                 </MenuListItem>
//                 <MenuListItem>
//                   <STLink to='/billing'>Premium</STLink>
//                 </MenuListItem>
//                 <MenuListItem>
//                   <STLink to='/settings'>Settings</STLink>
//                 </MenuListItem>
//                 <MenuListItem>
//                   <STLink to='/rsvp'>RSVP</STLink>
//                 </MenuListItem>
//                 <MenuListItem>
//                   <STLink to='/design'>Design</STLink>
//                 </MenuListItem>
//               </MenuList>
//               <Button onClick={this.handleClick}>Sign Out</Button>
//             </MenuContainer>
//           </Menu>
//         </SideNav>
//       </NavPage>
//     )
//   }
// }

// const mapStateToProps = state => {}

// export default withRouter(
//   connect(
//     mapStateToProps,
//     { logout }
//   )(Navigation)
// )
  }