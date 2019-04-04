import React from 'react'
import { connect } from 'react-redux'
import { deleteQuestion, editQuestion } from '../../actions'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {
        Question_body: '',
      },
      updating: false,
    }
  }

  inputHandler = e => {
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
