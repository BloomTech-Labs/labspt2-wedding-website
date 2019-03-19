import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Pricing from '../pricing/pricing'
import RSVP from '../rsvp/rsvp'
import Billing from '../pages/billing'
import Settings from '../pages/settings'
// import DemoCarousel from '../components/Carousel'


const sideNav = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'left',
    width: '20%'
}

const menuLogo = {
    display: 'flex',
    width: '92px',
    backgroundSize: 'cover 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '0',
    textDecoration: 'none',
    textTransform: 'uppercase'
}

const menu = {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    display: 'flex',
    padding: '0 40px',
    position: 'relative'
}

const menuListItem = {
    listStyleType: 'none',
    margin: '10px -30px'
}


const menuList = {
    listStyleType: 'none',
    padding: '0',
    height: '100%',
    margin: '0',
    marginRight: '40px',
}

const menuLink = {
    color: '#3A3E47',
    display: 'inline-block',
    height: '100%',
    fontSize: '16px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    alignItems: 'center',
    padding: '0 3px'
}



export default class Navigation extends Component {
    render() {
        return (
             <Router>
                 <div>
                     <h3><Link style={menuLogo} to="/">Home</Link></h3>
                    <div style={sideNav}>
                        <nav style={menu}>
                            <div>
                                <ul style={menuList}>
                                    <li style={menuListItem}><Link to="/" style={menuLink}>Home</Link></li>
                                    <li style={menuListItem}><Link to="/settings" style={menuLink}>Settings</Link></li>
                                    <li style={menuListItem}><Link to="/pricing" style={menuLink}>Pricing</Link></li>
                                    <li style={menuListItem}><Link to="/billing" style={menuLink}>Billing</Link></li>
                                    <li style={menuListItem}><Link to="/rsvp" style={menuLink}>RSVP</Link></li>
                                </ul>
                            </div>
                        </nav>
                        <Route exact path="/"></Route>
                        <Route exact path="/settings" component={Settings}></Route>
                        <Route exact path="/pricing" component={Pricing}></Route>
                        <Route exact path="/billing" component={Billing}></Route>
                        <Route exact path="/rsvp" component={RSVP}></Route>
                        
                    </div>
                    <div></div>
                 </div>
             </Router>
        );
    }
}