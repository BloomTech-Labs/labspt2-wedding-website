import React, { Component } from 'react'

class Registry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      link: '',
      name: '',
    }
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
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
            name='link'
            value={this.state.link}
            placeholder='Add a Registry'
            onChange={this.inputHandler}
          />
          <label htmlFor='name'>Display Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Display Name'
            onChange={this.inputHandler}
          />
        </form>
      </div>
    )
  }
}

export default Registry
