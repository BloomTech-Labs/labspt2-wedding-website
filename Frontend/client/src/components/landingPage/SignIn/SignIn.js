import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRegister } from '../../../actions/index'
import styled from 'styled-components'
import GoogleButton from 'react-google-button'

const FormCenter = styled.div`
  margin-bottom: 100px;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1em;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% 3% 3% 3%;
  width: 30.3%;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    display: flex;
    margin: 3% auto;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    // width: 60%;
    display: flex;
    margin: 3% auto;
  }
`

const P = styled.p`
  color: white;
  font-size: 1.5rem;
`

const Err = styled.div`
  color: red;
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
      if (!this.props.err) {
        console.log('pass')
        this.props.history.push('/')
      }
    }, 290)

    // need to implement nested routes so it can push to /dashboard, /profile, or something of that matter
  }

  render() {
    return (
      <FormCenter>
        <form onSubmit={this.handleSubmit}>
          <FormField>
            <FormLabel>
              <P>Username</P>
            </FormLabel>
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
            <FormLabel htmlFor='password'>
              <P>Password</P>
            </FormLabel>
            <FormInput
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.props.err ? <Err>Wrong username/password</Err> : null}
          </FormField>

          <FormField>
            <FormButton>Sign In</FormButton>
          </FormField>
        </form>
        <a href='https://joinourbigday.herokuapp.com/auth/google'>
          <GoogleButton />
        </a>{' '}
        <br />
        {/* <a href='https://joinourbigday.herokuapp.com/auth/facebook'>facebook</a> */}
      </FormCenter>
    )
  }
}
const mapStateToProps = state => ({
  err: state.err,
})

export default connect(
  mapStateToProps,
  { loginRegister }
)(SignIn)
