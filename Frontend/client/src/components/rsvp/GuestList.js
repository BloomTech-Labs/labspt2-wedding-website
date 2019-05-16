import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FaPlus, FaTrash } from 'react-icons/fa'

const Button = styled.button`
  background-color: red;
  color: #fefefe;
`

const EditButton = styled.button`
  background-color: blue;
  color: #fefefe;
`

const TableDiv = styled.div`
  display: flex;
  width: 100%;
`

const GuestPage = styled.div`
  display: flex;
  max-width: 1440px;
  min-width: 1024px;
  width: 100%;
  height: 70vh;
  justify-content: center;
  flex-direction: column;
  background-color: white;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    max-width: 1000px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
`

const BottomRow = styled.div`
  display: flex;
  margin-top: 25px;
`

const PlusText = styled.span`
  margin: 0 25px;
`

const ImportButton = styled.button`
  width: 100px;
  height: 25px;
`

class GuestList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      db: this.props.guests,
    }
  }

  deleteRow(id) {
    // delete guest from props
    const index = this.state.db.findIndex(db => {
      return db.id === id
    })
    this.state.db.splice(index, 1)
    this.setState(this.state.db)
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
        accessor: 'rsvp',
        maxWidth: 100,
        minWidth: 50,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
      {
        Header: 'Rsvp Maybe',
        accessor: 'rsvpMaybe',
        maxWidth: 100,
        minWidth: 50,
        style: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
      //address is still not gotten from db/ will get it set up after implementig this table
      // {
      //   Header: "Address",
      //   accessor: "mailingAddress",
      //   width: 300,
      //   maxWidth: 300,
      //   minWidth: 100,
      //   sortable: false,
      //   filterable: false,
      //   style: {
      //     display: 'flex',
      //     justifyContent: 'center'
      //   }
      // },
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
          return (
            <div>
              <EditButton>Edit</EditButton>
              <Button
                onClick={() => {
                  this.deleteRow(props.original.id)
                }}>
                Delete
              </Button>
            </div>
          )
        },
      },
    ]

    return (
      <GuestPage>
        <TopRow>
          <ImportButton>Import CSV</ImportButton>
          <FaTrash />
        </TopRow>
        <TableDiv>
          <ReactTable
            columns={columns}
            data={this.state.db}
            filterable
            defaultPageSize={5}
            noDataText={'Please watchFile...'}
            showPaginationTop
            showPaginationBottom={false}
          />
        </TableDiv>
        <BottomRow>
          <FaPlus />
          <PlusText>Add Guest Manually</PlusText>
        </BottomRow>
      </GuestPage>
    )
  }
}

const mapStateToProps = state => ({
  guests: state.guests,
})

export default connect(
  mapStateToProps,
  {}
)(GuestList)
