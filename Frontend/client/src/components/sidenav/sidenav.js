import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './sidenav.css'


// page imports
import Pricing from '../pricing/Pricing'
import RSVP from '../rsvp/rsvp'
import Billing from '../pages/billing'
import Settings from '../pages/settings'
import Home from '../pages/Home'
import GuestList from '../rsvp/GuestList'
import Exit from '../pages/exit'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { logout } from '../../actions'

import styled from 'styled-components'


// const Button = styled.button`
//   display: flex;
//   border-radius: 5%;
//   color: black;
//   border: none;
//   outline: none;
//   border-radius: 25px;
//   font-size: 0.8em;
//   font-weight: 500;
//   background: #52c4b9;
//   width: 50%;
//   align-self: center;
//   justify-content: center;
//   margin-bottom: 10px;
// `

export default class Navigation extends Component {
    render() {
        return (
             <Router>
                    <div className='navPage'>
                     <h3 className='menuLogo'><Link to="/" className='styled-link'>Home</Link></h3>
                    <div className='sideNav'>
                        <div className='menu'>
                            <div>
                                <ul className='menuList'>
                                    <li className='listItem'><Link to="/" className='style-link' >Home</Link></li>
                                    <li className='listItem'><Link to="/settings"  className='style-link'>Settings</Link></li>
                                    <li className='listItem'><Link to="/pricing"  className='style-link'>Pricing</Link></li>
                                    <li className='listItem'><Link to="/billing"  className='style-link'>Billing</Link></li>
                                    <li className='listItem'><Link to="/rsvp"  className='style-link'>RSVP</Link></li>
                                    <li className='listItem'><Link to="/guestlist"  className='style-link'>Guests</Link></li>
                                    <li className='listItem'><Link to="/exit"  className='style-link'>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='routeStyles'>
                            <Switch>
                                <Route path="/settings" component={Settings} />
                                <Route path="/pricing" component={Pricing} />
                                <Route path="/billing" component={Billing} />
                                <Route path="/rsvp" component={RSVP} />
                                <Route path='/guestlist' component={GuestList}/>
                                <Route path='/exit' component={Exit}/>
                                <Route path="/" component={Home} />                              
                            </Switch>

                        </div>
                    </div>
                    </div>
             </Router>
        );
    }

// const mapStateToProps = state => {}

// export default withRouter(
//   connect(
//     mapStateToProps,
//     { logout }
//   )(Navigation)
// )
  }