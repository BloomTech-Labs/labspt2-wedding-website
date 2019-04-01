import React from 'react'
import { connect } from 'react-redux'
import { deleteGuest, editGuest } from '../../actions'

class Guest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guest: {
        firstName: this.props.guestInfo.firstName,
        lastName: this.props.guestInfo.lastName,
        email: this.props.guestInfo.lastName,
      },
      updating: false,
    }
  }

  inputHandler = e => {
    const { guest } = { ...this.state }
    const currentState = guest
    const { name, value } = e.target
    currentState[name] = value
    this.setState({
      user: value,
    })
    console.log('input handled')
  }

  deleteHandler = e => {
    e.preventDefault()
    this.props.deleteGuest(this.props.userInfo.id, this.props.guestInfo.id)
  }

  updateHandler = () => {
    this.setState({
      updating: !this.state.updating,
    })
  }

  submitUpdateHandler = e => {
    e.preventDefault()
    this.props.editGuest(
      this.props.userInfo.id,
      this.props.guestInfo.id,
      this.state.guest
    )
  }

  render() {
    const guestInfo = this.props.guestInfo

    let rsvp = <p>rsvp: Not yet answered</p>
    if (guestInfo.rsvp !== null) {
      if (guestInfo.rsvp === 1) {
        rsvp = <p>rsvp: Attending</p>
      } else {
        rsvp = <p>rsvp: Not Attending</p>
      }
    } else {
      if (guestInfo.rsvpMaybe) {
        rsvp = <p>rsvp: Maybe</p>
      }
    }

    return (
      <div>
        <h3>
          Name: {guestInfo.firstName} {guestInfo.lastName}
        </h3>
        <p>email: {guestInfo.email}</p>
        <p>guestId: {guestInfo.id}</p>
        {rsvp}
        <button onClick={this.deleteHandler}>Delete</button>
        <button onClick={this.updateHandler}>update</button>
        {this.state.updating ? (
          <form>
            {/* inputs not updating state need help */}
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              value={this.state.guest.firstName}
              onChange={this.inputHandler}
            />
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={this.state.guest.lastName}
              onChange={this.inputHandler}
            />
            <input
              type='text'
              placeholder='email'
              name='email'
              value={this.state.guest.email}
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
  { deleteGuest, editGuest }
)(Guest)
