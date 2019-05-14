import React from 'react'
import { connect } from 'react-redux'
import { deleteQuestion, editQuestion } from '../../actions'

import styled from 'styled-components'

import axios from 'axios'
import Answer from './answer'

const AnswerWrapper = styled.div`
  text-align: center;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    flex-direction: column;
    width: 100%;
  }
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

const H3 = styled.h3`
  color: red;
`

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {
        Question_body: this.props.questionInfo.Question_body,
      },
      updating: false,
      answersTab: false,
      answers: {},
    }
  }

  //axios call on CDM by typing a new question

  // componentDidMount() {
  //   const api = 'http://localhost:3700'
  //   const questionId = this.props.questionInfo.id
  //   axios
  //     .get(`${api}/rsvp/answer/${questionId}`)
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         answers: res,
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  inputHandler = e => {
    e.preventDefault()
    const { question } = { ...this.state }
    const currentState = question
    const { name, value } = e.target
    currentState[name] = value
    this.setState({
      user: value,
    })
    console.log('input handled')
  }

  deleteHandler = e => {
    e.preventDefault()
    console.log('delete question :', this.props.userInfo.id)
    console.log('delete question :', this.props.questionInfo.id)
    this.props.deleteQuestion(
      this.props.userInfo.id,
      this.props.questionInfo.id
    )
  }

  updateHandler = () => {
    this.setState({
      updating: !this.state.updating,
    })
  }
  answersHandler = () => {
    console.log('GET ANSERS fired')
    const api = 'http://localhost:3700'
    const questionId = this.props.questionInfo.id
    axios
      .get(`${api}/rsvp/answer/${questionId}`)
      .then(res => {
        const answers = res.data.answers
        this.setState({
          answers: answers,
        })
        console.log(this.state)
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({
      answersTab: !this.state.answersTab,
    })
  }

  submitUpdateHandler = e => {
    e.preventDefault()
    this.props.editQuestion(
      this.props.userInfo.id,
      this.props.questionInfo.id,
      this.state.question
    )
  }

  render() {
    return (
      <AnswerWrapper>
        <h3>Question: {this.props.questionInfo.Question_body}</h3>
        <ButtonWrapper>
          <Button onClick={this.answersHandler}>See Answers</Button>
          <Button onClick={this.updateHandler}>Update</Button>
          <Button onClick={this.deleteHandler}>Delete</Button>
        </ButtonWrapper>
        {this.state.answersTab ? (
          this.state.answers.length > 0 ? (
            this.state.answers.map(answer => {
              return (
                <Answer
                  key={Math.random()}
                  answer={answer}
                  questionId={this.props.questionInfo.id}
                />
              )
            })
          ) : (
            <div>
              <H3>No Answers yet</H3>
            </div>
          )
        ) : null}
        {this.state.updating ? (
          <form>
            {/* inputs not updating state need help */}
            <input
              type='text'
              placeholder='Update this question'
              name='Question_body'
              value={this.state.question.Question_body}
              onChange={this.inputHandler}
            />
            <Button onClick={this.submitUpdateHandler}>Update</Button>
          </form>
        ) : null}
      </AnswerWrapper>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default connect(
  mapStateToProps,
  { deleteQuestion, editQuestion }
)(Question)
