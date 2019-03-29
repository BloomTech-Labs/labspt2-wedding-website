import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions'
import { withRouter } from 'react-router'

class UserSetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      weddingParty: '',
      venueLocation: '',
    }
  }
  // user react-google-places-suggest for venue location
  // @ https://github.com/xuopled/react-google-places-suggest#readme
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
  }

  handleSubmit = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    console.log('usersetup id', userId)
    console.log(this.state)
    this.props.editUser(userId, this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>User Setup</h1>
        <form>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            placeholder='Create a username'
            name='username'
            value={this.state.username}
            onChange={this.inputHandler}
          />
          <label htmlFor=''>Wedding Party</label>
          <input
            type='text'
            placeholder='Wedding party name'
            name='weddingParty'
            value={this.state.weddingParty}
            onChange={this.inputHandler}
          />
          <label htmlFor=''>Venue Location</label>
          <input
            type='text'
            placeholder='Venue Location'
            name='venueLocation'
            value={this.state.venueLocation}
            onChange={this.inputHandler}
          />
          <button onClick={this.handleSubmit}> Done </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default withRouter(
  connect(
    mapStateToProps,
    { editUser }
  )(UserSetup)
)
