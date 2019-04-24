import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import Login from '../landingPage/login/Login'
import styled from 'styled-components'

const ExitPage = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-width: 1024px;
  width: 100%;
  text-align: center;
  color: #ffffff;
`;


export default class Exit extends Component {
    render() {
      return (
        <Router>
          <ExitPage>
            <h1>You have been logged out.</h1>
            <h3>Click <Link to="/login">here</Link> to login again.</h3>

            <Route path='/login' component={Login}/>
          </ExitPage> 
        </Router>
      )
    }
}