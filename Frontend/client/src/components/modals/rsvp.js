import React, { Component } from 'react'
import Axios from 'axios'

import RsvpQuestion from './subModalComponents/rsvpQuestion'
import styled from 'styled-components'

const URL = 'http://localhost:3700'

const MainCont = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin: 3% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
`

const Body = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const Close = styled.button`
  border: 0;
  padding: 0;
  font-weight: bold;
  align-self: flex-start;
  font-size: 20px;
  cursor: pointer;
`
const Input = styled.input`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const Button = styled.button`
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
  margin: 5% auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    // width: 60%;
    margin: 3% auto;
  }
`
const Footer = styled.div`
  display: flex;
  flex-direction: row;
`

class Rsvp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guest: null,
      rsvp: null,
      rsvpMaybe: false,
      address: '',
      rsvpComment: '',
      codeStatus: null,
      code: '',
      value: 'yes',
      questions: null,
    }
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleTryA = e => {
    this.setState({ codeStatus: null })
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  verifyGuest = (e, code) => {
    e.preventDefault()
    Axios.get(`${URL}/guest/auth/${Number(code)}`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.setState({ guest: res.data, codeStatus: true })
          Axios.get(`${URL}/${res.data.userId}/questions`)
            .then(res => {
              this.setState({ questions: res.data })
            })
            .catch(err => {
              console.log('Qs err', err)
            })
        }
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ codeStatus: false })
        } else {
          console.log('get error AXIOS', err.response)
        }
      })
  }

  handleRsvp = e => {
    e.preventDefault()
    const rsvp = {
      rsvp: null,
      rsvpMaybe: false,
      rsvpComment: this.state.rsvpComment,
      address: this.state.address,
    }
    if (this.state.value === 'yes') {
      rsvp.rsvp = true
    }
    if (this.state.value === 'no') {
      rsvp.rsvp = false
    }
    if (this.state.value === 'maybe') {
      rsvp.rsvpMaybe = true
    }

    Axios.put(`${URL}/guest/${this.state.guest.id}`, rsvp)
      .then(res => {
        console.log('handle rsvp', res)
      })
      .catch(err => {
        console.log('handle rsvp err', err)
      })
    this.props.handleClose()
  }

  render() {
    if (this.state.codeStatus === null) {
      return (
        <MainCont>
          <Close onClick={() => this.props.handleClose()}>X</Close>
          <Header>
            <h2>RSVP</h2>
          </Header>
          <Body>
            <h2>Code</h2>
            <Input
              type='text'
              placeholder='Your code'
              name='code'
              value={this.state.code}
              onChange={this.inputHandler}
            />
          </Body>
          <Footer>
            <Button onClick={e => this.verifyGuest(e, this.state.code)}>
              Go
            </Button>
          </Footer>
        </MainCont>
      )
    } else {
      if (this.state.codeStatus) {
        return (
          <MainCont>
            <Close onClick={() => this.props.handleClose()}>X</Close>
            <Header>
              <h2>RSVP</h2>
            </Header>
            <Body>
              <h2>
                Name: {this.state.guest.firstName} {this.state.guest.lastName}
              </h2>
              <label>Will you be able to attend?</label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
                <option value='maybe'>Maybe</option>
              </select>
              <label htmlFor='label'>Address</label>
              <input
                type='text'
                placeholder='Your Address'
                name='address'
                value={this.state.address}
                onChange={this.inputHandler}
              />
              <label htmlFor='label'>Want to share a comment?</label>
              <input
                type='text'
                placeholder='Comment'
                name='rsvpComment'
                value={this.state.rsvpComment}
                onChange={this.inputHandler}
              />
              {this.state.questions
                ? this.state.questions.map(question => {
                    return (
                      <RsvpQuestion
                        question={question}
                        guestId={this.state.guest.id}
                      />
                    )
                  })
                : null}
            </Body>
            <Footer>
              <Button onClick={e => this.handleRsvp(e)}>Submit Rsvp</Button>
            </Footer>
          </MainCont>
        )
      } else {
        return (
          <MainCont>
            <Close onClick={() => this.props.handleClose()}>X</Close>
            <Body>
              <h3>Code not found try Again</h3>
            </Body>
            <Footer>
              <Button onClick={this.handleTryA}>Try Again</Button>
            </Footer>
          </MainCont>
        )
      }
    }
  }
}

export default Rsvp
