import React, { Component } from 'react'
import { connect } from 'react-redux'
// seems that is not needed with the table
import Guest from './guest'
import { fetchGuests, addGuest, deleteGuest } from '../../actions/'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components'
import { FaAutoprefixer } from 'react-icons/fa';

const Button = styled.button`
  background-color: red;
  color: #fefefe;
`

const EditButton = styled.button`
  background-color: blue;
  color: #fefefe;
`
// const TableContainer = styled.div`
//   margin-left: 50px;
//   margin-top: 30px;
//   background-color: white;
//   border: 2px solid black;
//   max-height: 800px;
//   border-radius: 20px;
// `

const AddContainer = styled.div`
  margin: 3% auto;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid gray;
  width: 80%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`
// Update guestnot working

class GuestList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addGuest: {
        firstName: '',
        lastName: '',
        email: '',
        userId: this.props.userInfo.id,
        code: null,
      },
    }
  }

  componentDidMount() {
    const userId = this.props.userInfo.id
    console.log('fetch guests id', userId)
    this.props.fetchGuests(userId)
  }

  inputHandler = e => {
    e.preventDefault()
    const { addGuest } = { ...this.state }
    const currentState = addGuest
    const { name, value } = e.target
    currentState[name] = value
    this.setState({
      user: value,
    })
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
    this.state.addGuest.code = guestCode
    const userId = this.props.userInfo.id
    console.log('add guest id', userId)
    console.log('state', this.state.addGuest)
    this.props.addGuest(userId, this.state.addGuest)
    this.setState(prevState => ({
      addGuest: {
        ...prevState.addGuest,
        firstName: '',
        lastName: '',
        email: '',
        userId: this.props.userInfo.id,
        code: null,
      },
    }))
  }

  deleteHandler = (e, guestId) => {
    e.preventDefault()
    this.props.deleteGuest(this.props.userInfo.id, guestId)
  }

  render() {
    console.log('guests :', this.props.guests)
    const columns = [
      {
        Header: 'First Name',
        accessor: 'firstName',
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 200,
        maxWidth: 200,
        minWidth: 100,
        sortable: false,
        filterable: false,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
      {
        Header: 'RSVP',
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
        Cell: props => {
          let rsvp = <p>Pending</p>
          if (props.original.rsvp !== null) {
            if (props.original.rsvp === 1) {
              rsvp = <p>Attending</p>
            } else {
              rsvp = <p>Not Attending</p>
            }
          } else {
            if (props.original.rsvpMaybe) {
              rsvp = <p>Maybe</p>
            }
          }
          return rsvp
        },
      },
      {
        Header: 'Actions',
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
        Cell: props => {
          console.log('props', props)
          return (
            <div>
              <Button
                onClick={e => {
                  this.deleteHandler(e, props.original.id)
                }}>
                Delete
              </Button>
              <EditButton>Edit</EditButton>
            </div>
          )
        },
      },
    ]
    return (
      <div>
        <AddContainer>
          <div>
            <h1>New Guest?</h1>
          </div>

          <form>
            {/* inputs not updating state need help */}
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              value={this.state.addGuest.firstName}
              onChange={this.inputHandler}
            />
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={this.state.addGuest.lastName}
              onChange={this.inputHandler}
            />
            <input
              type='text'
              placeholder='email'
              name='email'
              value={this.state.addGuest.email}
              onChange={this.inputHandler}
            />
            <button onClick={this.addGuestHandler}>Add guest</button>
          </form>
        </AddContainer>
        {this.props.guests ? (
          <ReactTable
            columns={columns}
            data={this.props.guests}
            filterable
            defaultPageSize={10}
            pageSizeOptions={[5, 10, 20]}
            noDataText={'Loading Guests'}
            showPaginationTop
            showPaginationBottom={false}
            style={{
              height: '400px',
              borderRadius: '8px',
              backgroundColor: 'white',
              marginTop: '30px',
              overflow: 'hidden',
              margin: '0 auto',
              width: '80%',
            }}
          />
        ) : null}
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
  { fetchGuests, addGuest, deleteGuest }
)(GuestList)
