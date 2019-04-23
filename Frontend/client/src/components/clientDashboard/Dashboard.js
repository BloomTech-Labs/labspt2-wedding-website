import React, { Component } from 'react'
import {
    BrowserRouter as Router, Route
    
} from 'react-router-dom'
import styled from 'styled-components'
import SideNav from '../sidenav/sidenav'

import Exit from '../pages/exit'

const DashStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-width: 1024px;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const DashPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  align-content: center;
`;




export default class Dashboard extends Component {
    render() {
      return (
        <Router>
          <DashStyle>
              <DashPage>
                  <Route exact path="/" component={SideNav} />
                  <Route path='/exit' component={Exit}/>
                {/* <div>
                  <Route exact path="/welcome" component={Welcome} />
                </div> */}
           </DashPage>
          </DashStyle>
           
        </Router>
      )
    };
}