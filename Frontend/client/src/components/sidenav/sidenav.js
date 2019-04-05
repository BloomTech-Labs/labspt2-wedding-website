import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { logout } from '../../actions'

import styled from 'styled-components'

const NavPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
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
    width: 90%;
    justify-content: center;
    margin: 0 auto;
  }
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    width: 100%;
  }
`

const MenuListItem = styled.li`
  display: flex;
  margin: 10px 0;
  text-align: left;
  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    display: flex;
    margin: 0 30px;
    text-align: center;
  }
  @media only screen and (max-width: 599px) {
    margin: 0 5px;
  }
`

const RTStyles = styled.div`
  display: flex;
  width: 100%;
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #010101;
`

const STLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #010101;
`
const Button = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
`

class Navigation extends Component {
  handleClick = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <NavPage>
        <MenuLogo>
          <StyledLink to='/'>Home</StyledLink>
        </MenuLogo>
        <SideNav>
          <Menu>
            <div>
              <MenuList>
                <MenuListItem>
                  <STLink to='/pricing'>Pricing</STLink>
                </MenuListItem>
                <MenuListItem>
                  <STLink to='/billing'>Billing</STLink>
                </MenuListItem>
                <MenuListItem>
                  <STLink to='/settings'>Account Settings</STLink>
                </MenuListItem>
                <MenuListItem>
                  <STLink to='/rsvp'>RSVP</STLink>
                </MenuListItem>
                <MenuListItem>
                  <Button onClick={this.handleClick}>Sign Out</Button>
                </MenuListItem>
              </MenuList>
            </div>
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
// Incoming Navbar -- Check

// import React, { Component } from "react";

// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// import Exit from "../pages/exit";

// const sidenav = {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "left",
//   width: "20%",
//   minWidth: "150px"
// };

// const side = {
//   display: "flex",
//   flexDirection: "column",
//   padding: "0 100% 0 10px",
//   width: "100%"
// };

// const menuLogo = {
//   display: "flex",
//   justifyContent: "center"
// };

// const menu = {
//   display: "flex",
//   width: "100%",
//   border: "1px solid black",
//   boxShadow: "0px 2px 24px 0px #010101",
//   borderRadius: "8px",
//   marginLeft: "auto",
//   marginRight: "auto",
//   padding: "0 10px"
// };

// const menuList = {
//   display: "flex",
//   flexDirection: "column",
//   listStyleType: "none",
//   padding: "10px 0",
//   height: "500px",
//   margin: "0",
//   marginRight: "40px"
// };

// const menuListItem = {
//   margin: "10px 10px"
// };

// const routes = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center"
// };

// const navPage = {
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "0 15px"
// };

// const leftLogo = {
//   display: "flex",
//   justifyContent: "right"
// };

// class SideNav extends Component {
//   render() {
//     return (
//       <Switch>
//         <div style={navPage}>
//           <div style={sidenav}>
//             <div style={side}>
//               <h3 style={menuLogo}>
//                 <Link to="/">Home</Link> >{" "}
//               </h3>
//               <nav style={menu}>
//                 <ul style={menuList}>
//                   <li style={menuListItem}>
//                     <Link to="/dashboard">Home</Link>
//                   </li>
//                   <li style={menuListItem}>
//                     <Link to="/design">Design</Link>
//                   </li>
//                   <li style={menuListItem}>
//                     <Link to="/pricing">Pricing</Link>
//                   </li>
//                   <li style={menuListItem}>
//                   {/*For some reason rsvp and settings are breaking the routes */}
//                     {/* <Link to="/rsvp">RSVP</Link> */}
//                   </li>
//                   <li style={menuListItem}>
//                     <Link to="/billing">Billing</Link>
//                   </li>
//                   <li style={menuListItem}>
//                     {/* <Link to="/settings">Settings</Link> */}
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//           <h3 style={leftLogo}>
//             <Link to="/exit">Logout</Link>
//           </h3>
//           <Route path="/exit" component={Exit} />
//         </div>
//       </Switch>
//     );
//   }
// }
