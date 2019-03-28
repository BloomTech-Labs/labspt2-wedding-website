import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { logout } from '../../actions'

import styled from 'styled-components'

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

const sideNav = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  justifyContent: 'left',
  width: '20%',
}

const menuLogo = {
  display: 'flex',
  width: '92px',
  backgroundSize: 'cover 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin: '0',
  textDecoration: 'none',
  textTransform: 'uppercase',
}

const menu = {
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',
  display: 'flex',
  padding: '0 40px',
  position: 'relative',
}

const menuListItem = {
  listStyleType: 'none',
  margin: '10px -30px',
}

const menuList = {
  listStyleType: 'none',
  padding: '0',
  height: '100%',
  margin: '0',
  marginRight: '40px',
}

const menuLink = {
  color: '#3A3E47',
  display: 'inline-block',
  height: '100%',
  fontSize: '16px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  alignItems: 'center',
  padding: '0 3px',
}

class Navigation extends Component {
  handleClick = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h3>
          <Link style={menuLogo} to='/'>
            Dashboard
          </Link>
        </h3>
        <div style={sideNav}>
          <nav style={menu}>
            <div>
              <ul style={menuList}>
                <li style={menuListItem}>
                  <Link to='/pricing' style={menuLink}>
                    Pricing
                  </Link>
                </li>
                <li style={menuListItem}>
                  <Link to='/billing' style={menuLink}>
                    Billing
                  </Link>
                </li>
                <li style={menuListItem}>
                  <Link to='/settings' style={menuLink}>
                    Account Settings
                  </Link>
                </li>
                {/* <li style={menuListItem}>
                    <Link to='/rsvp' style={menuLink}>
                      RSVP
                    </Link>
                  </li> */}
                <li style={menuListItem}>
                  <Button onClick={this.handleClick}>Sign Out</Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div />
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
