import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editRegistry, deleteRegistry } from '../../actions'
class AddRegistry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registry: {
        registryUrl: this.props.registry.registryUrl,
        registryName: this.props.registry.registryName,
      },
      edit: false,
    }
  }

  inputHandler = e => {
    e.preventDefault()
    const { registry } = { ...this.state }
    const currentState = registry
    const { name, value } = e.target
    currentState[name] = value
    this.setState({
      user: value,
    })
    console.log('input handled')
  }

  handleEditState = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleEdit = e => {
    //get userId from parent component via props
    const userId = this.props.user.id
    console.log('userId', userId)
    e.preventDefault()
    this.props.editRegistry(userId, this.props.registry.id, this.state.registry)
    this.setState({ edit: false })
  }

  handleDelete = e => {
    e.preventDefault()
    //get userId from parent component via props
    const userId = this.props.user.id
    this.props.deleteRegistry(userId, this.props.registry.id)
    this.props.handleClose()
  }

  render() {
    console.log('registry', this.props)
    return (
      <div>
        <button onClick={() => this.props.handleClose()}>Close</button>
        {!this.state.edit ? (
          <div>
            <h2>Registry Name</h2>
            <p>{this.state.registry.registryName}</p>
            <h2>Registry Link</h2>
            <p>{this.state.registry.registryUrl}</p>
            <button onClick={this.handleEditState}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        ) : (
          <form>
            <label htmlFor='link'>Registry Link</label>
            <input
              type='text'
              name='registryUrl'
              value={this.state.registry.registryUrl}
              placeholder='Add a Registry'
              onChange={this.inputHandler}
            />
            <label htmlFor='name'>Display Name</label>
            <input
              type='text'
              name='registryName'
              value={this.state.registry.registryName}
              placeholder='Display Name'
              onChange={this.inputHandler}
            />
            <button onClick={this.handleEdit}>Apply Changes</button>
          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { editRegistry, deleteRegistry }
)(AddRegistry)
