import React, { Component } from 'react'
import Axios from 'axios'

import RsvpQuestion from './subModalComponents/rsvpQuestion'

const URL = 'https://joinourbigday.herokuapp.com'

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
  }

  render() {
    if (this.state.codeStatus === null) {
      return (
        <div>
          <button onClick={() => this.props.handleClose()}>Close</button>
          <form>
            <label htmlFor='label'>Code</label>
            <input
              type='text'
              placeholder='Your code'
              name='code'
              value={this.state.code}
              onChange={this.inputHandler}
            />
            <button onClick={e => this.verifyGuest(e, this.state.code)}>
              Go
            </button>
          </form>
        </div>
      )
    } else {
      if (this.state.codeStatus) {
        return (
          <div>
            <button onClick={() => this.props.handleClose()}>Close</button>
            <div>
              <h2>
                name: {this.state.guest.firstName} {this.state.guest.lastName}
              </h2>
              <form>
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
                <button onClick={e => this.handleRsvp(e)}>Submit Rsvp</button>
              </form>
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
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <button onClick={() => this.props.handleClose()}>Close</button>
            <div>Code not found try Again</div>
            <button onClick={this.handleTryA}>Try Again</button>
          </div>
        )
      }
    }
  }
}

export default Rsvp
