import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGuests, addGuest, deleteGuest } from '../../actions/'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components'
import Axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 30.3%;
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
const Button2 = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1rem;
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
    font-size: 0.5rem;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    margin: 3% auto;
    font-size: 0.5rem;
  }
`

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3% auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid gray;
  width: 80%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`

const H1Wrap = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    flex-direction: column;
    align-items: center;
  }
`

const FormButWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`

const Input = styled.input`
  margin: 3%;
  width: 30%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`

const TableWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`

const ButtonTable = styled.div`
  width: 100%;
`

const P = styled.p``

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

  emailHandler = () => {
    Axios.get(
      `https://joinourbigday.herokuapp.com/customSite/user/${
        this.props.userInfo.id
      }`
    )
      .then(siteInfo => {
        const userUrl = {
          userUrl: siteInfo.data.userUrl,
        }
        Axios.post(
          `https://joinourbigday.herokuapp.com/guest/${
            this.props.userInfo.id
          }/email`,
          userUrl
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('guests :', this.props.guests)
    const columns = [
      {
        Header: 'Name',
        width: 300,
        maxWidth: 300,
        minWidth: 100,
        sortable: false,
        filterable: false,
        resizable: false,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        Cell: props => {
          let name = (
            <P>
              {props.original.firstName} {props.original.lastName}
            </P>
          )
          return name
        },
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 300,
        maxWidth: 300,
        minWidth: 100,
        sortable: false,
        filterable: false,
        resizable: false,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1%',
        },
      },
      {
        Header: 'RSVP',
        width: 300,
        maxWidth: 300,
        minWidth: 100,
        sortable: false,
        filterable: false,
        resizable:false,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        Cell: props => {
          let rsvp = <P>Pending</P>
          if (props.original.rsvp !== null) {
            if (props.original.rsvp === 1) {
              rsvp = <P>Attending</P>
            } else {
              rsvp = <P>Not Attending</P>
            }
          } else {
            if (props.original.rsvpMaybe) {
              rsvp = <P>Maybe</P>
            }
          }
          return rsvp
        },
      },
      {
        Header: 'Actions',
        width: 300,
        maxWidth: 300,
        minWidth: 100,
        sortable: false,
        filterable: false,
        resizable: false,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1%',
        },
        Cell: props => {
          console.log('props', props)
          return (
            <ButtonTable>
              <Button2>Edit</Button2>
              <Button2
                onClick={e => {
                  this.deleteHandler(e, props.original.id)
                }}>
                <FontAwesomeIcon icon={(faTrashAlt)}/>
              </Button2>
            </ButtonTable>
          )
        },
      },
    ]
    return (
      <PageWrap>
        <AddContainer>
          <H1Wrap>
            <h1>New Guest?</h1>
          </H1Wrap>
          <FormButWrap>
            <Form>
              {/* inputs not updating state need help */}
              <Input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={this.state.addGuest.firstName}
                onChange={this.inputHandler}
              />
              <Input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={this.state.addGuest.lastName}
                onChange={this.inputHandler}
              />
              <Input
                type='text'
                placeholder='email'
                name='email'
                value={this.state.addGuest.email}
                onChange={this.inputHandler}
              />
            </Form>
            <Button onClick={this.addGuestHandler}>Add guest</Button>
          </FormButWrap>
        </AddContainer>

        <TableWrapper>
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
                margin: '3% auto',
                width: '100%',
              }}
            />
          ) : null}
        </TableWrapper>
        <AddContainer>
          <h1>Send Email</h1>
          <Button onClick={this.emailHandler}>Send</Button>
        </AddContainer>
      </PageWrap>
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
