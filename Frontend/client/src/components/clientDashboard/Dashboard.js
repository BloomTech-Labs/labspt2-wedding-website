import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import PieChart from 'react-minimal-pie-chart'
import Modal from 'react-modal'
import CountDown from '../design/CountDown'

import RegistryAddModal from '../modals/addRegistry'
import RegistryViewModal from '../modals/viewRegistry'
import styled from 'styled-components'

import VenueSearch from '../venueSearch'
Modal.setAppElement('#root')

const DashContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
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

const RegistryItem = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1.5rem;
  font-weight: 500;
  background: goldenrod;
  cursor: pointer;
  margin: 5% auto;
  width: px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
    font-size: 1rem;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    width: 60%;
    margin: 3% auto;
    font-size: 1rem;
  }
`

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin: 4% 0%;
`

const DashPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    align-items: inherit;
  }
`

const Location = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const H1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-top: 5%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    font-size: 2em;
  }
`

const H2 = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin: 3% 3% 5% 3%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    font-size: 2em;
  }
`
const RegistryContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    flex-direction: column;
  }
`

// const GuestList = styled.div`
//   margin-top: 5%;
//   border-radius: 8px;
//   background: rgba(255, 255, 255, 0.9);
//   padding: 3%;
//   margin: 3% 0%;
// `

const H3 = styled.h3`
  font-size: 1.5em;
  margin: 5% auto;
  text-align: center;
`

const RSVP = styled.div`
  margin-top: 5%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 3%;
  margin: 3% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Registry = styled.div`
  margin-top: 5%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 3%;
  margin: 3% 0%;
`

const Pie = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-self: center;
  justify-self: center;
  border: 1px solid black;
`

const WompWomp = styled.div`
  width: 100%;
  display: flex;
  justify-contnet: space-evenly;
  align-items: center;
`

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height: '320px',
    borderRadius: '8px',
    width: '400px',
    padding: '0',
  },
}

const P = styled.p`
  text-align: center;
  margin: 0 auto;
`

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
    console.log('regmodalId', id)
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
              <H1>
                {this.props.userInfo.partnerName1} &amp;{' '}
                {this.props.userInfo.partnerName2}'s Wedding
              </H1>
              <H1>
                When: {moment(this.props.userInfo.weddingDate).format('ll')}
              </H1>
              <div>
                <CountDown />
              </div>
            </NameDate>
            <Location>
              <H2>
                Where:{' '}
                <a target='_blank' href={this.props.userInfo.addressUrl}>
                  {this.props.userInfo.venueLocation}
                </a>
              </H2>
              <NavLink
                to='/Design'
                style={{ textDecoration: 'none', width: '100%' }}>
                <Button>
                  <P>Change Design</P>
                </Button>
              </NavLink>
            </Location>
          </Head>

          {/* This doesn't appear to be needed. User can simply nav to the guest list.*/}
          {/* <GuestList>
            <H3>Guest List</H3>
            {/* Need to figure out how to import a CSV to the server, then how to give user that option. */}
          {/* <Button>
              <P>Import CSV</P>
            </Button>
            {/* Needs to route to guest list */}
          {/* <NavLink to='/guests' style={{ textDecoration: 'none' }}>
              <Button>
                <P>View My Guest List</P>
              </Button>
            </NavLink>
          </GuestList> */}
          <RSVP>
            <H3>RSVP</H3>
            <Pie>
              {(rsvpYes && rsvpMaybe && rsvpNo) === 0 ? (
                <WompWomp>
                  <H3>No guests have RSVP yet</H3>
                </WompWomp>
              ) : (
                <PieChart
                  data={[
                    { title: 'Yes', value: rsvpYes, color: '#E38627' },
                    { title: 'No', value: rsvpNo, color: '#C13C37' },
                    { title: 'Maybe', value: rsvpMaybe, color: '#6A2135' },
                  ]}
                  label={({ data, dataIndex }) =>
                    // console.log('piechart DATA', data)
                    `${data[dataIndex].title}: ${data[dataIndex].value}`
                  }
                  labelPosition={120}
                  cx={60}
                  labelStyle={{
                    fontSize: '.5rem',
                    fontFamily: 'sans-serif',
                    fill: '#121212',
                  }}
                  radius={30}
                  animate
                  reveal
                />
              )}
            </Pie>
            <NavLink
              to='RSVP'
              style={{ textDecoration: 'none', width: '100%' }}>
              <Button>
                <P>Edit Questions</P>
              </Button>
            </NavLink>
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
              ) : (
                <RegistryItem>No Registry Added Yet</RegistryItem>
              )}
              <Button onClick={this.handleModal}>
                <P>Add Registry</P>
              </Button>
            </RegistryContainer>
          </Registry>
          <Modal isOpen={this.state.modal} style={modalStyle}>
            <RegistryAddModal
              user={this.props.userInfo}
              handleClose={this.handleModal}
            />
          </Modal>
          <Modal isOpen={this.state.regModal} style={modalStyle}>
            <RegistryViewModal
              registry={registry.find(r => r.id === this.state.regModal)}
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
