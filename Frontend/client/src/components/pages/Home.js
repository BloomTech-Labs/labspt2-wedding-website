import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import styled from 'styled-components'

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-width: 1024px;
  width: 100%;
  height: 100vh;
  align-items: center;
  color: #ffffff;
  // border: 1px solid black;
`;

export default class Home extends Component {
    render() {
      return (
        <Router>
          <HomePage>
              <h1>Welcome to the Dashboard.</h1>
          </HomePage>
        </Router>
      )
    }
}