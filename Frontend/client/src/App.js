// Dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { setUser, fetchGuests } from './actions'

import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

import LandingPage from './components/landingPage/LandingPage'
import Login from './components/landingPage/login'
import DashBoard from './components/clientDashboard/Dashboard'
import Navigation from './components/sidenav/sidenav'
import Pricing from './components/pricing/Pricing'
import QuestionList from './components/rsvp/questionList'
import StripeBtn from './components/Stripe/stripeBtn'
import Settings from './components/settings/Settings'
import GuestList from './components/guest/guestList'
import UserSetup from './components/landingPage/userSetup'
import Design from './components/design/Design'
import CustomSite from './components/design/customSite'
import WeddingPage1 from './components/design/weddingPage1/WeddingPage1'
import WeddingPage2 from './components/design/weddingPage2/WeddingPage2'
import WeddingPage3 from './components/design/weddingPage3/WeddingPage3'
import styled from 'styled-components'

import './App.css'

const Container = styled.div`
  display: flex;
  max-width: 1600px;
  margin: auto;
  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`

// components from front end merge

// import Settings from "./components/settings/Settings";
// import DashBoard from "./components/clientDashboard/Dashboard";

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
        this.props.fetchGuests(decoded.id)
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
      if (!this.props.userInfo.partnerName1) {
        // send user to account setup page
        return (
          <div>
            <UserSetup />
          </div>
        )
      } else {
        return (
          <Router className='App'>
            <Container>
              <Navigation />

              <Switch>
                <Route exact path='/' component={DashBoard} />
                <Route path='/settings' component={Settings} />
                <Route path='/pricing' component={Pricing} />
                <Route path='/billing' component={StripeBtn} />
                <Route path='/guests' component={GuestList} />
                <Route path='/rsvp' component={QuestionList} />
                <Route
                  path='/design'
                  render={props => (
                    <Design {...props} user={this.props.userInfo} />
                  )}
                />
                <Route path='/design1' component={WeddingPage1} />
                <Route path='/design2' component={WeddingPage2} />
                <Route path='/design3' component={WeddingPage3} />
              </Switch>
            </Container>
          </Router>
        )
      }
    }

    return (
      // user Is not auth
      // needs nav bar for going b/t landing page and login component
      <Router className='App'>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* login Should have singup first */}
            <Route path='/login' component={Login} />
            <Route path='/:customSite' component={CustomSite} />
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
  guests: state.guests,
})

export default withRouter(
  connect(
    mapStateToProps,
    { setUser, fetchGuests }
  )(App)
)

// routes for extra incoming components

//       <Router className="App">
//         <Switch>
//           <Route exact path="/" component={LandingPage} />
//           <Route path="/login" component={Login} />
//           <Route path="/pricing" component={Pricing} />
//           <Route path="/rsvp" component={RSVP} />
//           <Route path="/billing" component={Billing} />
//
//
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;
