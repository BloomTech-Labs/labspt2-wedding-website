import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editRegistry, deleteRegistry } from '../../actions'

import styled from 'styled-components'

const MainCont = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin: 3% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
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
  justify-content: center;
  align-content: center;
  align-items: center;
`

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
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
  font-size: 1.5rem;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% auto;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
    font-size: 1rem;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    margin: 3% auto;
    font-size: 1rem;
  }
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
      <div>
        {!this.state.edit ? (
          <MainCont>
            <Close onClick={() => this.props.handleClose()}>X</Close>
            <Header>
              <h2>Registry</h2>
            </Header>
            <Body>
              <h3>Registry: {this.state.registry.registryName}</h3>
              <H3>
                Registry Link:{' '}
                <a target='_blank' href={this.state.registry.registryUrl}>
                  {this.state.registry.registryUrl}
                </a>
              </H3>
            </Body>
            <Footer>
              <Button onClick={this.handleEditState}>Edit</Button>
              <Button onClick={this.handleDelete}>Delete</Button>
            </Footer>
          </MainCont>
        ) : (
          <MainCont>
            <Close onClick={() => this.props.handleClose()}>X</Close>
            <Header>
              <h2>Edit Registry</h2>
            </Header>
            <Body>
              <label htmlFor='link'>Registry Link</label>
              <Input
                type='text'
                name='registryUrl'
                value={this.state.registry.registryUrl}
                placeholder='Add a Registry'
                onChange={this.inputHandler}
              />
              <label htmlFor='name'>Display Name</label>
              <Input
                type='text'
                name='registryName'
                value={this.state.registry.registryName}
                placeholder='Display Name'
                onChange={this.inputHandler}
              />
            </Body>
            <Footer>
              <Button onClick={this.handleEdit}>Apply Changes</Button>
            </Footer>
          </MainCont>
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
