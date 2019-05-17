import React, { Component } from 'react'
import Axios from 'axios'

import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin: 3% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`
const Sub = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1.5rem;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% auto;
  width: 30.3%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
    font-size: 1rem;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    margin: 3% auto;
    font-size: 1rem;
  }
`

const URL = 'https://joinourbigday.herokuapp.com'

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

  submitAnswer = () => {
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
      <Wrapper>
        <Sub>
          <h2>Question: {this.props.question.Question_body}</h2>
          <form>
            <input
              type='text'
              placeholder='question Answer'
              name='answer_body'
              value={this.state.answer_body}
              onChange={this.inputHandler}
            />
          </form>
        </Sub>
      </Wrapper>
    )
  }
}

export default RsvpQuestion
