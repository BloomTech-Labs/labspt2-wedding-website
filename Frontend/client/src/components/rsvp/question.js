import React from 'react'
import { connect } from 'react-redux'
import { deleteQuestion, editQuestion } from '../../actions'

import axios from 'axios'
import Answer from './answer'

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
    const api = 'https://joinourbigday.herokuapp.com/'
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
      <div>
        <h3>Question: {this.props.questionInfo.Question_body}</h3>
        <button onClick={this.deleteHandler}>Delete</button>
        <button onClick={this.updateHandler}>update</button>
        <button onClick={this.answersHandler}>See answers</button>
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
              <h3>No Answers yet</h3>
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
            <button onClick={this.submitUpdateHandler}>Update guest</button>
          </form>
        ) : null}
      </div>
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
