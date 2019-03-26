// Dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { setUser } from './actions'

import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

import LandingPage from './components/landingPage/LandingPage'
import Login from './components/landingPage/login'
import Navigation from './components/sidenav/sidenav'
import Pricing from './components/pricing/Pricing'
import RSVP from './components/rsvp/rsvp'
import Billing from './components/pages/billing'

const row = {
  display: 'flex',
  flexDirection: 'row',
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasToken: false,
      decodedToken: {},
    }
  }

  componentWillMount() {
    console.log('CWM')
    const jwt = localStorage.getItem('jwt')
    if (!jwt) {
      const query = queryString.parse(window.location.search)
      const token = query.token
      console.log('token from query', query.token)

      if (token) {
        let decoded = jwt_decode(token.toString())
        console.log('decoded token', decoded)
        this.props.setUser(decoded)
        localStorage.setItem('jwt', query.token)
        this.setState(
          {
            hasToken: true,
            decodedToken: decoded,
          },
          this.props.history.push('/')
        )
      }
    } else {
      let decoded = jwt_decode(jwt.toString())
      this.setState({
        hasToken: true,
        decodedToken: decoded,
      })
    }
  }

  render() {
    if (this.props.userInfo) {
      console.log('userInfo', this.props.userInfo)
      if (!this.props.userInfo.username) {
        // send user to account setup page
        return (
          <div>
            <h1>User Setup Page</h1>
          </div>
        )
      } else {
        return (
          <Router className='App'>
            <div style={row}>
              <Navigation />

              <Switch>
                <Route exact path='/' />
                {/* <Route exact path='/settings' component={Settings} /> */}
                <Route path='/pricing' component={Pricing} />
                <Route path='/billing' component={Billing} />
                <Route path='/rsvp' component={RSVP} />
              </Switch>
            </div>
          </Router>
        )
      }
    }

    return (
      // needs nav bar for going b/t landing page and login component
      <Router className='App'>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* login Should have singup first */}
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// withRouter allows us to acces react-router props in the whole component
// used it to be able to do a history.push to remove the token from the url
const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default withRouter(
  connect(
    mapStateToProps,
    { setUser }
  )(App)
)
