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
  height: 100vh;
  max-width: 1440px;
  min-width: 1024px;
  width: 100%;
  text-align: center;
  color: #ffffff;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
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