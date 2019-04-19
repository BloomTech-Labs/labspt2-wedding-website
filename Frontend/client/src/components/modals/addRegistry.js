import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRegistry } from '../../actions'
class AddRegistry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registryUrl: '',
      registryName: '',
    }
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
  }

  handleAdd = e => {
    e.preventDefault()
    //get userId from parent component via props
    const userId = this.props.user.id
    console.log(userId)
    console.log(this.state)
    this.props.addRegistry(userId, this.state)
  }

  render() {
    console.log('registry', this.props)
    return (
      <div>
        <button onClick={() => this.props.handleClose()}>Close</button>
        <form>
          <label htmlFor='link'>Registry Link</label>
          <input
            type='text'
            name='registryUrl'
            value={this.state.registryUrl}
            placeholder='Add a Registry'
            onChange={this.inputHandler}
          />
          <label htmlFor='name'>Display Name</label>
          <input
            type='text'
            name='registryName'
            value={this.state.registryName}
            placeholder='Display Name'
            onChange={this.inputHandler}
          />
          <button onClick={this.handleAdd}>Add Registry</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { addRegistry }
)(AddRegistry)
