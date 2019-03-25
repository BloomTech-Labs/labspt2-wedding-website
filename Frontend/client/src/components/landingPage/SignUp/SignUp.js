import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loginRegister } from '../../../actions/index'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      hasAgreed: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.hasAgreed) {
      //if user agreed to terms of service
      this.props.loginRegister(this.state)
      this.setState(
        {
          username: '',
          password: '',
          email: '',
          hasAgreed: 0,
        },
        this.props.history.push('/')
      )
      // need to implement nested routes so it can push to /dashboard, /profile, /account set up or something of that matter
    } else {
      // if user didn't agree to terms of service
      console.log('need to agree')
    }
  }

  render() {
    return (
      <div className='FormCenter'>
        <form className='FormFields' onSubmit={this.handleSubmit}>
          <div className='FormField'>
            <label htmlFor='username' className='FormField__Label'>
              Username
            </label>
            <input
              type='text'
              // id='email'
              className='FormField__Input'
              placeholder='Enter your Username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label htmlFor='email' className='FormField__Label'>
              E-mail
            </label>
            <input
              type='text'
              id='email'
              className='FormField__Input'
              placeholder='Enter your E-mail'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label htmlFor='password' className='FormField__Label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label className='FormField__CheckboxLabel'>
              <input
                type='checkbox'
                className='FormField__Checkbox'
                name='hasAgreed'
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{' '}
              I agree all statments in{' '}
              <a href='http://' className='FormField__TermsLink'>
                terms of service
              </a>
            </label>
          </div>

          <div className='FormField'>
            <button className='FormField__Button mr-20'>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { loginRegister }
)(SignUp)
