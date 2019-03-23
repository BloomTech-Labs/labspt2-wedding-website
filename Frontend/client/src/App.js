import React, { Component } from 'react'

import LandingPage from './components/landingPage/LandingPage'

import './App.css'
import stripeBtn from './components/Stripe/stripeBtn'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LandingPage />
        <stripeBtn />
      </div>
    )
  }
}

export default App
