import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './question'
import { fetchQuestions, addQuestion } from '../../actions'

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Question_body: '',
    }
  }

  componentDidMount() {
    const userId = this.props.userInfo.id
    console.log('fetch guests id', userId)
    this.props.fetchQuestions(userId)
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
  }

  addQuestionHandler = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    console.log('add guest id', userId)
    this.props.addQuestion(userId, this.state)
    this.setState({
      Question_body: '',
    })
  }

  render() {
    console.log('questions :', this.props.questions)
    return (
      <div>
        <div>
          <h1>rsvp Questionnaire</h1>
        </div>
        <div>
          {this.props.loading ? <h1>Loading Note List</h1> : null}
          {this.props.questions
            ? this.props.questions.map(question => {
                return <Question key={Math.random()} questionInfo={question} />
              })
            : null}
        </div>
        <form>
          {/* inputs not updating state need help */}
          <h2>Add a new question to your rsvp questionare</h2>
          <input
            type='text'
            placeholder='Create a new question'
            name='Question_body'
            value={this.state.Question_body}
            onChange={this.inputHandler}
          />
          <button onClick={this.addQuestionHandler}>Add Question</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.fetching,
  questions: state.userQuestions,
  userInfo: state.userInfo,
})

export default connect(
  mapStateToProps,
  { fetchQuestions, addQuestion }
)(QuestionList)
