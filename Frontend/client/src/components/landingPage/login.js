import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'

import './login.css'

function Login({ match }) {
  console.log('path', match.path)
  console.log('url', match.url)
  return (
    <div className='App'>
      <div className='App__Aside' />
      <div className='App__Form'>
        <div className='PageSwitcher'>
          <NavLink to={`${match.url}`} className='PageSwitcher__Item'>
            Sign In
          </NavLink>
          <Link
            to={`${match.url}/signup`}
            className='PageSwitcher__Item PageSwitcher__Item--Active'>
            Sign Up
          </Link>
        </div>

        <div className='FormTitle'>
          <Link to={`${match.url}`} className='FormTitle__Link'>
            Sign In
          </Link>{' '}
          or{' '}
          <Link to={`${match.url}/signup`} className='FormTitle__Link'>
            Sign Up
          </Link>
        </div>

        <Route path={`${match.path}/signup`} component={SignUp} />
        <Route exact path={`${match.path}`} component={SignIn} />
      </div>
    </div>
  )
}

export default Login
