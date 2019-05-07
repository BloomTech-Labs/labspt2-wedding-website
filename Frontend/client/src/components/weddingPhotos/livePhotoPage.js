import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotoFeed } from '../../actions'
import { Input, Label } from 'reactstrap'
import { Modal, FormGroup, Button, FormText } from 'react-bootstrap'
import logo from '../../Images/jobdLogo.png'
import styled from 'styled-components'
import PhotoCard from '../weddingPhotos/photoCard'

const Image = styled.img`
  width: 100%;
`
class WeddingPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoCards: this.props.photoCards,
      userInfo: this.props.userInfo,
      show: false,
      caption: '',
      source: logo,
    }
    this.handleShow = e => {
      this.setState({ show: true })
    }
    this.handleClose = e => {
      this.setState({ show: false, source: '' })
    }
    this.fileChange = e => {
      console.log(e.target.files)
      this.setState({ source: URL.createObjectURL(e.target.files[0]) })
    }
  }
  render() {
    console.log('userInfo', this.props.userInfo)
    return (
      <div>
        <Button onClick={this.handleShow}>Add a photo</Button>

        <div>
          <Modal show={this.state.show}>
            <Modal.Header>
              <h4>Add a Memory for the newlyweds</h4>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <input
                  type='file'
                  name='image'
                  accept='image/*'
                  onChange={this.fileChange}
                />
                <Image src={this.state.source} />
                <FormText color='muted' />
                Please only upload Image files or Video files under 50MB. We
                appreciate your patience when uploading videos
                <FormText />
              </FormGroup>
              <FormGroup>
                <Label>Caption</Label>
                <Input type='text' name='caption' id='captionInput' />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.handleClose}>close</button>
            </Modal.Footer>
          </Modal>
        </div>
        <h1>Live Wedding Photos</h1>
        {/* {this.photoCards.map(img =>
          <PhotoCard key={img.imgURL} info={img}/>
            )} */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photoCards: state.photoCards,
  userInfo: state.userInfo,
})

export default connect(
  mapStateToProps,
  { fetchPhotoFeed }
)(WeddingPhotos)
