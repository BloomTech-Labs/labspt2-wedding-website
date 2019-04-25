import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRegister } from '../../../actions/index'
import styled from 'styled-components'

const FormCenter = styled.div`
  margin-bottom: 100px;
`

const FormField = styled.div`
  margin-bottom: 40px;
`

const FormLabel = styled.div`
  display: block;
  text-transform: uppercase;
  font-size: 0.9em;
  color: white;
`

const FormInput = styled.input`
  width: 85%;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
`

const FormButton = styled.button`
  background-color: #52c4b9;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
`

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
    setTimeout(() => {
      this.props.history.push('/')
    }, 500)

    // need to implement nested routes so it can push to /dashboard, /profile, or something of that matter
  }

  render() {
    return (
      <FormCenter>
        <form onSubmit={this.handleSubmit}>
          <FormField>
            <FormLabel>Username</FormLabel>
            <FormInput
              // id='email'
              className='FormField__Input'
              placeholder='Enter your email'
              name='username'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormField>

          <FormField>
            <FormButton>Sign In</FormButton>
          </FormField>
        </form>
        <a href='https://joinourbigday.herokuapp.com'>Google</a>
      </FormCenter>
    )
  }
}
const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { loginRegister }
)(SignIn)
