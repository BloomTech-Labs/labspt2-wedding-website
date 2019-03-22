import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

import './login.css';

class Login extends Component {
    render() {
        return (
             <Router>
                <div className="App">
                    <div className="App__Aside"></div>
                    <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink to="/" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <Link to="/sign-in" className="FormTitle__Link">Sign In</Link> or <Link to="/" className="FormTitle__Link FormTitle__Link--Active">Sign Up</Link>
                    </div>

                    <Route exact path="/" component={SignUp}>
                    </Route>
                    <Route exact path="/sign-in" component={SignIn}>
                    </Route>
                    </div>
                </div>
             </Router>
        );
    }
}

export default Login;