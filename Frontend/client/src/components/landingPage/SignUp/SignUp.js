import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label htmlFor="name" className="FormField__Label">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />  
              </div>
              <div className="FormField">
                <label htmlFor="password" className="FormField__Label">Password</label>
                <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
              </div>
              <div className="FormField">
                <label htmlFor="email" className="FormField__Label">E-mail</label>
                <input type="text" id="email" className="FormField__Input" placeholder="Enter your E-mail" name="name" />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input type="checkbox" className="FormField__Checkbox" name="hasAgreed" /> I agree all statments in <a href="http://" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button><Link to="/sign-in" className="FormField__Link">I'm already a member</Link>
              </div>
              
            </form>
          </div>
        );
    }
}

export default SignUp;