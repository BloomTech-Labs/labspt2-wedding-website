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

const FormCBLabel = styled.div`
  color: #646f7d;
  font-size: 0.9em;
`

const FormCheckBox = styled.input`
  position: relative;
  top: 1.5px;
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

const P = styled.p`
  font-size: 1.5rem;
`

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
      <FormCenter>
        <form onSubmit={this.handleSubmit}>
          <FormField>
            <FormLabel htmlFor='username'>
              <P>Username</P>
            </FormLabel>
            <FormInput
              type='text'
              // id='email'
              className='FormField__Input'
              placeholder='min 6 characters'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor='email'>
              <P>E-mail</P>
            </FormLabel>
            <FormInput
              type='text'
              id='email'
              className='FormField__Input'
              placeholder='Enter your E-mail'
              name='email'
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
            <FormCBLabel>
              <FormCheckBox
                type='checkbox'
                name='hasAgreed'
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{' '}
              I agree all statments in{' '}
              <a href='http://' className='FormField__TermsLink'>
                terms of service
              </a>
            </FormCBLabel>
          </FormField>

          <FormField>
            <FormButton>Sign Up</FormButton>
          </FormField>
        </form>
      </FormCenter>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { loginRegister }
)(SignUp)
