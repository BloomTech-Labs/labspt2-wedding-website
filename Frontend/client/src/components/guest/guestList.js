import React, { Component } from 'react'
import { connect } from 'react-redux'
import Guest from './guest'
import { fetchGuests, addGuest, deleteGuest } from '../../actions/'

import ReactTable from 'react-table'
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
  color: #fefefe;
`

const EditButton = styled.button`
  background-color: blue;
  color: #fefefe;
`
const TableContainer = styled.div`
  margin-top: 30px;
  background-color: white;
  border: 2px solid black;
`

const AddContainer = styled.div`
  margin-top: 60px;
  background-color: white;
  border: 2px solid black;
`

class GuestList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      userId: this.props.userInfo.id,
      code: null,
    }
  }

  componentDidMount() {
    const userId = this.props.userInfo.id
    console.log('fetch guests id', userId)
    this.props.fetchGuests(userId)
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
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
    this.state.code = guestCode
    const userId = this.props.userInfo.id
    console.log('add guest id', userId)
    console.log('state', this.state)
    this.props.addGuest(userId, this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      code: null,
    })
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
          console.log('props', props)
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
              value={this.state.firstName}
              onChange={this.inputHandler}
            />
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={this.state.lastName}
              onChange={this.inputHandler}
            />
            <input
              type='text'
              placeholder='email'
              name='email'
              value={this.state.email}
              onChange={this.inputHandler}
            />
            <button onClick={this.addGuestHandler}>Add guest</button>
          </form>
        </AddContainer>
        <TableContainer>
          {this.props.guests ? (
            <ReactTable
              columns={columns}
              data={this.props.guests}
              filterable
              defaultPageSize={5}
              noDataText={'Please watchFile...'}
              showPaginationTop
              showPaginationBottom={false}
            />
          ) : null}
        </TableContainer>
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
