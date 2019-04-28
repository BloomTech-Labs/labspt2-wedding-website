import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './question'
import { fetchQuestions, addQuestion } from '../../actions'

import styled from 'styled-components'

const RSVPWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
`

const Head = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3%;
`

const H1 = styled.h1`
  font-size: 2em;
`

const Form = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2 = styled.h2`
  font-size: 1.5em;
`

const Input = styled.input`
  padding: .5%;
`

const Button = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  padding: 15px 70px;
  font-size: 1em;
  font-weight: 500;
  background: #52c4b9;
  margin: 3%;
`

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
      <RSVPWrapper>
        <Head>
          <H1>RSVP Questionnaire</H1>
        </Head>
        <div>
          {this.props.loading ? <h1>Loading Note List</h1> : null}
          {this.props.questions
            ? this.props.questions.map(question => {
                return <Question key={Math.random()} questionInfo={question} />
              })
            : null}
        </div>
        <Form>
          {/* inputs not updating state need help */}
          <H2>Add a new question to your rsvp questionare</H2>
          <Input
            type='text'
            placeholder='Create a new question'
            name='Question_body'
            value={this.state.Question_body}
            onChange={this.inputHandler}
          />
          <Button onClick={this.addQuestionHandler}>Add Question</Button>
        </Form>
      </RSVPWrapper>
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
