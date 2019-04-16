import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyUser } from '../../actions'
import { withRouter } from 'react-router'
import queryString from 'query-string'

class Verify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
    }
  }

  componentDidMount() {
    const query = queryString.parse(window.location.search)
    const email = query.email
    this.setState({ email: email })
  }

  handleVerify = () => {
    const query = queryString.parse(window.location.search)
    const email = query.email
    const token = query.vtoken
    const verifyCreds = {
      email: email,
      token: token,
    }
    console.log(verifyCreds)
    this.props.verifyUser(verifyCreds)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h2>
          Verifying
          {this.state.email ? <h2>{this.state.email}</h2> : <h2>loading</h2>}
        </h2>
        <button onClick={this.handleVerify}>Verify</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default withRouter(
  connect(
    mapStateToProps,
    { verifyUser }
  )(Verify)
)
