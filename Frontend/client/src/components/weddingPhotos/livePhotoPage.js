import React, { Component } from 'react'
import { Input, Label } from 'reactstrap'
import { Modal, FormGroup, Button, FormText } from 'react-bootstrap'
import logo from '../../Images/jobdLogo.png'
import styled from 'styled-components'
import PhotoCard from '../weddingPhotos/photoCard'
import axios from 'axios'
import PhotoButton from './photoButton'

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  background-image: linear-gradient(
    to right top,
    #4ccdc1,
    #40c6ca,
    #3fbecf,
    #49b6d2,
    #57add1,
    #599cbf,
    #5a8bad,
    #587b9a,
    #496077,
    #394656,
    #282e37,
    #17181a
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Source Sans Pro', sans-serif .photos {
    padding-top: 60px;
    overflow: scroll;
  }
`

const Image = styled.img`
  width: 100%;
`
class WeddingPhotos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoCards: [],
      userInfo: [],
      show: false,
      caption: '',
      source: logo,
      file: [],
      userName: '',
    }
  }
  componentWillMount = () => {
    this.setCardData()
  }

  setCardData = () => {
    axios
      .get(`http://localhost:3700/users/${this.props.info.id}/live-photos`)
      .then(res => {
        this.setState({ photoCards: res.data.reverse() })
      })
  }

  handleShow = e => {
    this.setState({ show: true })
  }
  handleClose = e => {
    this.setState({
      show: false,
      caption: '',
      source: logo,
      file: [],
      userName: '',
    })
  }
  fileChange = e => {
    let image = e.target.files[0]
    this.setState({
      source: URL.createObjectURL(e.target.files[0]),
      file: image,
    })
  }
  inputHandler = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  addPhoto = e => {
    e.preventDefault()
    let form = new FormData()
    form.append('image', this.state.file)
    form.set('name', this.state.userName)
    form.set('caption', this.state.caption)
    let config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    }

    axios
      .post(
        `http://localhost:3700/users/${this.props.info.id}/live-upload`,
        form,
        config
      )
      .then(res => {
        this.setCardData()
      })
    setTimeout(() => {
      this.handleClose()
    }, 1500)
  }

  render() {
    return (
      <Wrapper>
        <Header className='header'>
          <div>
            <h1>Live Wedding Photos</h1>
          </div>
          <div>
            <Button onClick={this.handleShow}>Add a photo</Button>
          </div>
        </Header>
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
                <Label>Your name</Label>
                <Input
                  type='text'
                  name='userName'
                  value={this.state.userName}
                  id='captionInput'
                  onChange={this.inputHandler}
                />
                <Label>Caption</Label>
                <Input
                  type='text'
                  name='caption'
                  value={this.state.caption}
                  id='captionInput'
                  onChange={this.inputHandler}
                />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <button className='buttons' onClick={this.addPhoto}>
                Add Photo
              </button>
              <button className='buttons' onClick={this.handleClose}>
                close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className='photos'>
          {this.state.photoCards.map(img => (
            <PhotoCard key={img.imgUrl} info={img} />
          ))}
        </div>
      </Wrapper>
    )
  }
}

export default WeddingPhotos
