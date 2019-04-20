import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components'
import { FaPlus, FaTrash, FaUser } from 'react-icons/fa'

const Button = styled.button`
  background-color: red;
  color: #fefefe;
`;

const TableDiv = styled.div`
  display: flex;
  width: 100%;

`;

const GuestPage = styled.div`
  display: flex;
  max-width: 1440px;
  min-width: 1024px;
  width: 100%;
  margin: 0 40px;
  justify-content: center;
  flex-direction: column;
  background-color: white;  
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
`;

const BottomRow = styled.div`
  display: flex;
  margin-top: 25px;
`;

const PlusText = styled.span`
  margin: 0 25px;
`;

const ImportButton = styled.button`
  width: 100px;
  height: 25px;

`;


class GuestList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://jryel1970.github.io/jm-react-table/db.json"
    fetch(url, {
      method: "GET"
    }).then(reponse => reponse.json()).then(db => {
      this.setState({ db })
    })
  }

  deleteRow(id){
    const index = this.state.db.findIndex(db =>{
      return db.id === id
    })
    this.state.db.splice(index, 1)
    this.setState(this.state.db)
  }

  render() {
    const columns = [

      {
        Header: "ID",
        accessor: "id",
        maxWidth: 100,
        minWidth: 50,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "First Name",
        accessor: "firstName",
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "Email",
        accessor: "contactEmail",
        width: 200,
        maxWidth: 200,
        minWidth: 100,
        sortable: false,
        filterable: false,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "RSVP",
        accessor: "rsvp",
        maxWidth: 100,
        minWidth: 50,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "Address",
        accessor: "mailingAddress",
        width: 300,
        maxWidth: 300,
        minWidth: 100,
        sortable: false,
        filterable: false,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "Who Do You Know",
        accessor: "knows",
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      {
        Header: "Actions",
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false,
        style: {
          display: 'flex',
          justifyContent: 'center'
        },
        Cell: props => {
          return (
            <Button
              onClick={() => {
                this.deleteRow(props.original.id);
              }}
            >Delete</Button>
          )
        }
      }
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
          noDataText={"Please watchFile..."}
          showPaginationTop
          showPaginationBottom={false}
        >

        </ReactTable>        
      </TableDiv>
      <BottomRow>
        <FaPlus /><PlusText>Add Guest Manually</PlusText>
      </BottomRow>
      </GuestPage>
    );
  }
}

export default GuestList;