import React, { Component } from 'react';
import './pricing.css'

export default class Pricing extends Component {
    render() {
        return (
            <div className="pricing">
            <h1 className="price-logo">Pricing</h1>
            <hr />
            <div className="box">
                <ul className="list-box">
                    <li>Planning Dashboard</li>
                    <li>Digital RSVPs</li>
                    <li>Free Website Hosting</li>
                    <li>Wedding Website</li>
                </ul>
            </div>
            <hr />
            <h2>$0</h2>
         </div>
        );
    }
}