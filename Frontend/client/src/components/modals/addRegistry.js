import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRegistry } from '../../actions'

import styled from 'styled-components'

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 1.5rem;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% auto;
  width: 40%;
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

const Footer = styled.div``

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
    this.props.handleClose()
  }

  render() {
    console.log('registry', this.props)
    return (
      <MainCont>
        <Close onClick={() => this.props.handleClose()}>X</Close>
        <Header>
          <h2>Add Registry</h2>
        </Header>
        <Body>
          <Input
            type='text'
            name='registryUrl'
            value={this.state.registryUrl}
            placeholder='Registry Link'
            onChange={this.inputHandler}
          />
          <Input
            type='text'
            name='registryName'
            value={this.state.registryName}
            placeholder='Display Name'
            onChange={this.inputHandler}
          />
          <Footer>
            <Button onClick={this.handleAdd}>Add Registry</Button>
          </Footer>
        </Body>
      </MainCont>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { addRegistry }
)(AddRegistry)
