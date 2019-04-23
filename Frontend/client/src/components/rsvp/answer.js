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
    const guestId = this.state.answer.guestid
    console.log('guestId :', guestId)
    const guestObj = guestsArr.find(guest => guest.id === guestId)
    setTimeout(() => {
      this.setState({
        guest: guestObj,
      })
    }, 200)
    console.log('guestObj :', guestObj)
  }

  render() {
    console.log('this.state :', this.state)
    console.log('answer props:', this.props)
    return (
      <div>
        <h3>Guest:</h3>
        {this.state.guest ? (
          <p>
            {this.state.guest.firstName} {this.state.guest.lastName}
          </p>
        ) : (
          <p>Loding name</p>
        )}

        <h3>Answer</h3>
        <p>{this.state.answer.answer}</p>
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
