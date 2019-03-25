// importing dependencies
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Login from './login'
import DemoCarousel from './Carousel'

const lpStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1300px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const buttonDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '25px',
  height: '100px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  width: '26%',
}

export default class LandingPage extends Component {
  render() {
    return (
      <div style={lpStyle}>
        <Route exact path='/' component={DemoCarousel} />
        <div style={buttonDiv}>
          <Link to='/login' component={Login}>
            Get Started
          </Link>
        </div>
      </div>
    )
  }
}
