import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import SideNav from '../sidenav/sidenav'

export default class Home extends Component {
    render() {
      return (
        <Router>
          <div>
              <SideNav />
              <h1>Welcome to the Dashboard.</h1>
          </div>
        </Router>
      )
    }
}