import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import Pricing from "../pricing/Pricing";
// import RSVP from "../rsvp/rsvp";
// import Billing from "../pages/billing";
// import Settings from "../pages/settings";
// import DashBoard from "../pages/Dashboard";
import Exit from "../pages/exit";

const sidenav = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  width: "20%",
  minWidth: "150px"
};

const side = {
  display: "flex",
  flexDirection: "column",
  padding: "0 100% 0 10px",
  width: "100%"
};

const menuLogo = {
  display: "flex",
  justifyContent: "center"
};

const menu = {
  display: "flex",
  width: "100%",
  border: "1px solid black",
  boxShadow: "0px 2px 24px 0px #010101",
  borderRadius: "8px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0 10px"
};

const menuList = {
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  padding: "10px 0",
  height: "500px",
  margin: "0",
  marginRight: "40px"
};

const menuListItem = {
  margin: "10px 10px"
};

const routes = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const navPage = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 15px"
};

const leftLogo = {
  display: "flex",
  justifyContent: "right"
};

class SideNav extends Component {
  render() {
    return (
      <Switch>
        <div style={navPage}>
          <div style={sidenav}>
            <div style={side}>
              <h3 style={menuLogo}>
                <Link to="/">Home</Link> >{" "}
              </h3>
              <nav style={menu}>
                <ul style={menuList}>
                  <li style={menuListItem}>
                    <Link to="/dashboard">Home</Link>
                  </li>
                  <li style={menuListItem}>
                    <Link to="/design">Design</Link>
                  </li>
                  <li style={menuListItem}>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li style={menuListItem}>
                    <Link to="/rsvp">RSVP</Link>
                  </li>
                  <li style={menuListItem}>
                    <Link to="/billing">Billing</Link>
                  </li>
                  <li style={menuListItem}>
                    <Link to="/settings">Settings</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <h3 style={leftLogo}>
            <Link to="/exit">Logout</Link>
          </h3>
          <Route path="/exit" component={Exit} />
        </div>
      </Switch>
    );
  }
}

export default SideNav;
