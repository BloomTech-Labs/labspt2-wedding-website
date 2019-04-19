import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import PieChart from 'react-minimal-pie-chart'
import Modal from 'react-modal'

import RegistryAddModal from '../modals/addRegistry'
import RegistryViewModal from '../modals/viewRegistry'
import styled from 'styled-components'
Modal.setAppElement('#root')

const DashContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: #4c5d72;
`
const Button = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
`

const RegistryItem = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  margin-right: 15px;
  font-size: 0.8em;
  font-weight: 500;
  background: goldenrod;
  cursor: pointer;
`

const ShareButton = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  float: right;
  margin-right: 5%;
`

const GLButton = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  margin-left: 5%;
`

// Unused
// const SignOut = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: flex-end;
// `

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 3% 0% 3%;
  width: 100%;
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const NameDate = styled.div`
  display: flex;
  flex-direction: column;
`

const Location = styled.div``

const H1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
  margin-top: 5%;
`

const H2 = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: white;
  margin-top: 12%;
`
const RegistryContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const GuestList = styled.div`
  margin-top: 5%;
  border-top: 2px solid #707c8b;
  padding: 3%;
`

const H3 = styled.h3`
  font-size: 1.5em;
  color: white;
  margin-bottom: 5%;
`

const RSVP = styled.div`
  margin-top: 5%;
  border-top: 2px solid #707c8b;
  padding: 3%;
  display: flex;
  justify-content: space-between;
`

const Registry = styled.div`
  border-top: 2px solid #707c8b;
  padding: 3%;
`

const Pie = styled.div`
  width: 25%;
`

//This is throwing an error, no return value
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      regModal: null,
    }
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  handleRegModal = (e, id) => {
    e.preventDefault()
    console.log('regmodal')
    this.setState({
      regModal: id,
    })
  }

  closeRegModal = () => {
    this.setState({
      regModal: null,
    })
  }

  render() {
    let rsvpYes = 0
    let rsvpNo = 0
    let rsvpMaybe = 0
    let rsvpNoA = 0
    if (this.props.guests) {
      this.props.guests.map(guest => {
        if (guest.rsvp || guest.rsvpMaybe) {
          guest.rsvp === 1 ? rsvpYes++ : rsvpNo++
          rsvpMaybe++
        } else {
          rsvpNoA++
        }
      })
    }

    const registry = []
    console.log('registry :', registry)
    console.log('rsvpYes :', rsvpYes)
    console.log('rsvpNo :', rsvpNo)
    console.log('rsvpMaybe :', rsvpMaybe)
    console.log('rsvpNoA :', rsvpNoA)
    return (
      <DashContainer>
        <HeadContainer>
          <Head>
            <NameDate>
              <Link to='/Design'>
                <Button>Change Design</Button>
              </Link>
              {/* Will need to write code that auto populates name and date for wedding. */}
              <H1>
                {this.props.userInfo.partnerName1} &amp;{' '}
                {this.props.userInfo.partnerName2}'s Wedding
              </H1>
              <H1>{moment(this.props.userInfo.weddingDate).format('ll')}</H1>
            </NameDate>
            <Location>
              {/* This will need to share the link to the personal wedding web page */}
              <ShareButton>Share</ShareButton>
              {/* Will need to populate info from server */}
              <H2>{this.props.userInfo.venueLocation}</H2>
            </Location>
          </Head>

          <GuestList>
            <H3>Guest List</H3>
            {/* Need to figure out how to import a CSV to the server, then how to give user that option. */}
            <Button>Import CSV</Button>
            {/* Needs to route to guest list */}
            <Link to='/guests'>
              <GLButton>Guest List</GLButton>
            </Link>
          </GuestList>
          <RSVP>
            <H3>RSVP</H3>
            {/* Some pie chart plug in I'll have to talk to Marguel about goes here*/}
            {/* Needs to rout to RSVP page */}

            <Pie>
              <PieChart
                data={[
                  { title: 'yes', value: rsvpYes, color: '#E38627' },
                  { title: 'no', value: rsvpNo, color: '#C13C37' },
                  { title: 'maybe', value: rsvpMaybe, color: '#6A2135' },
                  { title: 'maybe', value: rsvpNoA, color: '#668B8B' },
                ]}
                label
                labelStyle={{
                  fontSize: '12px',
                  fontFamily: 'sans-serif',
                }}
                radius={42}
                labelPosition={120}
                animate
                reveal
              />
            </Pie>
            <Link to='RSVP'>
              <Button>Edit Questions</Button>
            </Link>
          </RSVP>
          <Registry>
            <H3>Registry</H3>
            {/* Amazon registry goes here. Need to figure out how */}
            <RegistryContainer>
              {this.props.registry ? (
                this.props.registry.length > 0 ? (
                  this.props.registry.map(rItem => {
                    registry.push(rItem)
                    return (
                      <div>
                        <RegistryItem
                          onClick={e => this.handleRegModal(e, rItem.id)}>
                          {rItem.registryName}
                        </RegistryItem>
                      </div>
                    )
                  })
                ) : (
                  <RegistryItem>No Registry Added yet</RegistryItem>
                )
              ) : null}
              <Button onClick={this.handleModal}>Add Registry</Button>
            </RegistryContainer>
          </Registry>
          <Modal isOpen={this.state.modal}>
            <RegistryAddModal
              user={this.props.userInfo}
              handleClose={this.handleModal}
            />
          </Modal>
          <Modal isOpen={this.state.regModal}>
            <RegistryViewModal
              registry={registry[this.state.regModal - 1]}
              user={this.props.userInfo}
              handleClose={this.closeRegModal}
            />
          </Modal>
        </HeadContainer>
      </DashContainer>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  guests: state.guests,
  registry: state.userRegistry,
})

export default connect(
  mapStateToProps,
  {}
)(Dashboard)
