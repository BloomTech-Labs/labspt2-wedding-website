import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPhotoFeed, }  from '../../actions'
import { Input, Label } from 'reactstrap'
import { Modal, FormGroup, Button, FormText } from 'react-bootstrap'

class WeddingPhotos extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        photoCards: this.props.photoCards,
        userInfo: this.props.userInfo,
        show: false,
        caption: '',
        source: ''
      }
       this.handleShow = e =>{
        this.setState({show: true})
      }
      this.handleClose = e =>{
        this.setState({show: false})
      }
      this.fileChange = e =>{
        this.setState({source: URL.createObjectURL(e.target.files[0])})
      }
    
    }
    render() {
      console.log(this.state.userInfo)
      return (
        <div>
          <Button onClick={this.handleShow}>Add a photo</Button>
          
         <div>
          <Modal show={this.state.show} >
            <Modal.Header  >
              <h4>Add a Memory for the newlyweds</h4>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <Label for='weddingPhotos'>Image File</Label>
                <Input type="file" name="image" onChange={this.fileChange} />
                <img src={this.state.source} alt="your image" />
                <FormText color="muted"/>
                Please only upload Image files or Video files under 50MB. We appreciate your patience when uploading videos
                <FormText/> 
              </FormGroup>
              <FormGroup>
                <Label>Caption</Label>
                <Input type="text" name="caption" id="captionInput" />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.handleClose}>close</button>
            </Modal.Footer>
          </Modal>
          </div>
          <h1>Live Wedding Photos</h1>
          
        </div>
        );
    }
  }

  const mapStateToProps = state =>({
   photoCards: state.photoCards,
   userInfo: state.userInfo
  })

  export  default connect(
    mapStateToProps, 
    { fetchPhotoFeed }
  )(WeddingPhotos)