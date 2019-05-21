import React, { Component } from 'react'
import { Input, Label } from 'reactstrap'
import { Modal, FormGroup, Button, FormText } from 'react-bootstrap'
import logo from '../../Images/jobdLogo.png'
import styled from 'styled-components'
import PhotoCard from '../weddingPhotos/photoCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Wrapper = styled.div `
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
background-image: linear-gradient(to right top, #4ccdc1, #40c6ca, #3fbecf, #49b6d2, #57add1, #599cbf, #5a8bad, #587b9a, #496077, #394656, #282e37, #17181a);
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  width: 100vw;
  position:fixed;
  overflow: scroll;
  .photos{
    padding-top:80px;
    overflow: hidden;
    overflow-y: scroll;
  }
  .error{
    color:white;
    margin: 80px 7%;
  }
`

const Image = styled.img `
  width: 100%
`

const Header = styled.div`
  position: fixed;
  z-index: 1;
  width:100%;
  background-color: rgb(255, 255, 255, 0.7);
  top: 0;
  display: flex;
  align-content: center;
  justify-content: space-around;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 100%;
    height: 60px;
   h1{
     font-size:1.5rem;
     margin: 10% auto;
   }
  }
  button{
    margin-top: 7px
    border-radius: 8px;
    color: white;
    border: none;
    outline: none;
    border-radius: 25px;
    font-size: 1.2rem;
    background: #52c4b9;
    display: flex;
    justify-content: space-evenly;
    transition: 0.5s ease;
    &:hover{
      color:#52c4b9;
      background: white;
      border: 1px solid #52c4b9;
      
    }
    @media only screen and (max-width: 500px) and (min-width: 300px) {
      width: 100%;
      margin: 10% auto;
      margin-right: 25px;
      font-size: 0.9rem;
    }
    @media only screen and (max-width: 700px) and (min-width: 501px) {
      margin: 3% auto;
      font-size: 1rem;
    }
  }
`

const CardsCont = styled.div`
 
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
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
      .get(
        `https://joinourbigday.herokuapp.com/users/${
          this.props.info.userId
        }/live-photos`
      )
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
        `https://joinourbigday.herokuapp.com/users/${
          this.props.info.userId
        }/live-upload`,
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
        <CardsCont>
          {this.state.photoCards.length ? (
            this.state.photoCards.map(img => (
              <PhotoCard key={img.imgUrl} info={img} />
            ))
          ) : (
            <h1 className='error'>
              No Photos yet... <br /> Be the First to upload!
            </h1>
          )}
        </CardsCont>
        <Footer>
          <Link to={`/${this.props.info.userUrl}`}>
            <p> Back </p>
          </Link>
        </Footer>
      </Wrapper>
    )
  }
}

export default WeddingPhotos
