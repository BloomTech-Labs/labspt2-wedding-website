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
      code: null,
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

  codeGenerator = () => {
    console.log('generator fire')
    const length = 5
    const timestamp = +new Date()

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const generate = () => {
      var ts = timestamp.toString()
      var parts = ts.split('').reverse()
      var id = ''

      for (var i = 0; i < length; ++i) {
        var index = getRandomInt(0, parts.length - 1)
        id += parts[index]
      }

      return Number(id)
    }
    return generate()
  }

  addGuestHandler = e => {
    e.preventDefault()
    const guestCode = this.codeGenerator()
    this.state.code = guestCode
    const userId = this.props.userInfo.id
    console.log('add guest id', userId)
    console.log('state', this.state)
    this.props.addGuest(userId, this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      code: null,
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
