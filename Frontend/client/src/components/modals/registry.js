import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRegistry } from '../../actions'
class Registry extends Component {
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

  handleAdd = () => {
    //get userId from parent component via props
    const userId = this.props.user
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
            value={this.state.link}
            placeholder='Add a Registry'
            onChange={this.inputHandler}
          />
          <label htmlFor='name'>Display Name</label>
          <input
            type='text'
            name='registryName'
            value={this.state.name}
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
)(Registry)
