import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loginRegister } from '../../../actions/index'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.loginRegister(this.state)
    this.setState({
      username: '',
      password: '',
    })
    // need to implement nested routes so it can push to /dashboard, /profile, or something of that matter
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='FormCenter'>
        <form className='FormFields' onSubmit={this.handleSubmit}>
          <div className='FormField'>
            <label className='FormField__Label'>Username</label>
            <input
              // id='email'
              className='FormField__Input'
              placeholder='Enter your email'
              name='username'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className='FormField'>
            <label className='FormField__Label' htmlFor='password'>
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
            <button className='FormField__Button mr-20'>Sign In</button>
          </div>
        </form>
        <a href='http://localhost:3700/auth/google'>Google</a>
      </div>
    )
  }
}
const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { loginRegister }
)(SignIn)
