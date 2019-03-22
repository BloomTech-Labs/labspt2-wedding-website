import React, { Component } from 'react'
import {
    BrowserRouter as Router, Route, Link
    
} from 'react-router-dom'
import SideNav from '../sidenav/sidenav'
import Welcome from '../Welcome'
import Exit from '../pages/exit'

const dashStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '400px',
  margin: '0 auto',
  paddingTop: '50px',
}

const dashPage = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'top',
  alignContent: 'center',
}


export default class Dashboard extends Component {
    render() {
      return (
        <Router style={dashStyle}>
          
           <div style={dashPage}>
              <Route exact path="/" component={SideNav} />
              <Route path='/exit' component={Exit}/>
              
              {/* <div>
                <Route exact path="/welcome" component={Welcome} />
              </div> */}
              
           </div>
        </Router>
      )
    };
}