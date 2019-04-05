import React from 'react'
import { connect } from 'react-redux'

class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guest: null,
      answer: this.props.answer,
    }
  }

  componentDidMount() {
    const guestsArr = this.props.guests
    const guestId = this.props.answer.guestList_id
    const guestObj = guestsArr.find(guest => {
      if (guest) {
        return guest.id === `${guestId}`
      }
    })

    this.setState({
      guest: guestObj,
    })
  }

  render() {
    return (
      <div>
        <h3>Guest:</h3>
        <p>
          {this.state.guest.firstName} {this.state.guest.firstName}
        </p>
        <h3>Answer</h3>
        <p>{this.state.answer.answer_body}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guests: state.guests,
})

export default connect(
  mapStateToProps,
  {}
)(Answer)
