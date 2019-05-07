import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editRegistry, deleteRegistry } from '../../actions'

import styled from 'styled-components'

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  margin-bottom: 15px;
`

const Body = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
`
const Close = styled.button`
  border: 0;
  padding: 0;
  font-weight: bold;
  align-self: flex-start;
  font-size: 20px;
  cursor: pointer;
`
const Input = styled.input`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const Button = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1em;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% auto;
  width: 30.3%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    // width: 60%;
    margin: 3% auto;
  }
`

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
      <MainCont>
        <Close onClick={() => this.props.handleClose()}>X</Close>
        {!this.state.edit ? (
          <div>
            <Header>
              <h2>Registry</h2>
            </Header>
            <Body>
              <h2>Registry Name</h2>
              <p>{this.state.registry.registryName}</p>
              <h2>Registry Link</h2>
              <a target='_blank' href={this.state.registry.registryUrl}>
                {this.state.registry.registryUrl}
              </a>
              <button onClick={this.handleEditState}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
            </Body>
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
      </MainCont>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { editRegistry, deleteRegistry }
)(AddRegistry)
