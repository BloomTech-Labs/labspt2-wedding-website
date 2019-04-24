import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Background1 from "../design/media/ScrapBookBackground.jpg"
import Background2 from "../design/media/BackgroundDesign2.jpg"
import Background3 from "../design/media/rainbowbackground.jpg"

const URL = 'http://localhost:3700'

const DesignBody = styled.div`
background: white;
border-radius: 8px;
margin: 3%;
`

const TemplateWrapper = styled.div`
display: flex;
justify content: space-evenly;
width: 100%;
margin: 3%;
`

const SampleWrapper1 = styled.div`
background-image: url(${Background1});
width: 30%;
height: 100px;
background-size: contain;
margin: 3%;
`
const SampleWrapper2 = styled.div`
background-image: url(${Background2});
width: 30%;
height: 100px;
background-size: contain;
margin: 3%;
`
const SampleWrapper3 = styled.div`
background-image: url(${Background3});
width: 30%;
height: 100px;
background-size: contain;
margin: 3%;
`

const InputWrapper = styled.div`
margin: 3%;
padding: 3%;
`

const PreviewButton = styled.button`
width: 30%;
border-radius: 8px;
margin: 3%;
`

const Head = styled.div`
`

const H1 = styled.h1`
`

const H2 = styled.h2`
`

class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteDesign: null,
      userUrl: '',
      story: '',
      proposalStory: '',
    }
  }

  handleSubmit = e => {
    console.log('submit Fire')
    e.preventDefault()
    axios
      .post(
        `http://localhost:3700/customSite/${this.props.user.id}`,
        this.state
      )
      .then(res => {
        console.log(res)
        this.setState({
          siteDesign: null,
          userUrl: '',
          story: '',
          proposalStory: '',
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    })
    console.log('input handled')
  }

  render() {
    console.log(this.state)
    return (
      <DesignBody>
        <Head>
          <H1>Here you can create your own personal web page for your wedding.</H1>
        </Head>
        <StoryWrapper>
        <form>
        <input
            type='text'
            placeholder='Couple Story'
            name='story'
            value={this.state.story}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Proposal Story'
            name='proposalStory'
            value={this.state.proposalStory}
            onChange={this.inputHandler}
          />
        </form>
        </StoryWrapper>
        <TemplateWrapper>
          <div>
          <H2>Select your background by entering the corresponding number in the space below the samples</H2>
          </div>
          <SampleWrapper1>
            <Link to='/design1'></Link>
          </SampleWrapper1>
          <SampleWrapper2>
            <Link to='/design2'></Link>
          </SampleWrapper2>
          <SampleWrapper3>
            <Link to='/design3'></Link>
          </SampleWrapper3>
        </TemplateWrapper>
        <PreviewButton>Preview</PreviewButton>
        <InputWrapper>
        <form>
          <input
            type='number'
            placeholder='Design'
            name='siteDesign'
            min='1'
            max='3'
            value={this.state.siteDesign}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Couple Story'
            name='story'
            value={this.state.story}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Proposal Story'
            name='proposalStory'
            value={this.state.proposalStory}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Site Url'
            name='userUrl'
            value={this.state.userUrl}
            onChange={this.inputHandler}
          />
          <button onClick={this.handleSubmit}>Apply</button>
        </form>
        </InputWrapper>
      </DesignBody>
    )
  }
}

export default Design

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// import Sidenav from '../sidenav/sidenav'

// export default class Design extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <Link to='/design1'>Design 1</Link>
//         </div>
//         <div>
//           <Link to='/design2'>Design 2</Link>
//         </div>
//         <div>
//           <Link to='/design3'>Design 3</Link>
//         </div>
//       </div>
//     )
//   }
// }
