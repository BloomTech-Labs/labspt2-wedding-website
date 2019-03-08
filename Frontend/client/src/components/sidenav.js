import React, { Component } from 'react';
import '../components/sidenav.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div className="sideNav">
                    <h3 className="menu-logo"><a href="https://">Home</a> > Pricing</h3>
                    <nav className="menu">
                        <div className="menu_right">
                            <ul className="menu_list">
                                <li className="menu_list-item"><a href="http://" className="menu_link menu_link-active">Home</a></li>
                                <li className="menu_list-item"><a href="http://" className="menu_link">Designs</a></li>
                                <li className="menu_list-item"><a href="http://" className="menu_link">Pricing</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Router>
             
        );
    }
}