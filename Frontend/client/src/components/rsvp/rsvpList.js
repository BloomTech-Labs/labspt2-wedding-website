import React, { Component } from 'react'
import { connect } from 'react-redux'
import Guest from './guest'
import { fetchGuests, addGuest } from '../../actions/'

class GuestList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      userId: this.props.userInfo.id,
    }
  }

  componentDidMount() {
    const userId = this.props.userInfo.id
    console.log('fetch guests id', userId)
    this.props.fetchGuests(userId)
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
  }

  addGuestHandler = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    console.log('add guest id', userId)
    this.props.addGuest(userId, this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    })
  }

  render() {
    console.log('guests :', this.props.guests)
    return (
      <div>
        <div>
          <h1>Your Guests</h1>
        </div>
        <form>
          {/* inputs not updating state need help */}
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.state.lastName}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='email'
            name='email'
            value={this.state.email}
            onChange={this.inputHandler}
          />
          <button onClick={this.addGuestHandler}>Add guest</button>
        </form>
        <div>
          {this.props.loading ? <h1>Loading Note List</h1> : null}
          {this.props.guests
            ? this.props.guests.map(guest => {
                return <Guest key={Math.random()} guestInfo={guest} />
              })
            : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.err,
  loading: state.fetching,
  guests: state.guests,
  userInfo: state.userInfo,
})

export default connect(
  mapStateToProps,
  { fetchGuests, addGuest }
)(GuestList)
