import React, { Component } from 'react'
import Axios from 'axios'
const URL = 'http://localhost:3700'
class RsvpQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer_body: '',
      users_id: this.props.question.users_id,
      rsvpQuestions_id: this.props.question.id,
      guestList_id: this.props.guestId,
    }
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitAnswer = e => {
    e.preventDefault()
    console.log(this.state)
    Axios.post(`${URL}/rsvp/answers`, this.state)
      .then(res => {
        console.log('addanswer resp', res.data)
      })
      .catch(err => {
        console.log('addanswer err', err)
      })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Question: {this.props.question.Question_body}</h2>
          <label htmlFor='label'>Answer the Question</label>
          <form>
            <input
              type='text'
              placeholder='question Answer'
              name='answer_body'
              value={this.state.answer_body}
              onChange={this.inputHandler}
            />
            <button onClick={e => this.submitAnswer(e)}>Submit Answer</button>
          </form>
        </div>
      </div>
    )
  }
}

export default RsvpQuestion
