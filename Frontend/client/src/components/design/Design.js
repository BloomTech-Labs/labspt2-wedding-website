import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const URL = 'http://localhost:3700'

const DesignBody = styled.div`
background: white;
border-radius: 8px;
margin: 0% 3%;
width: 100%;
`

const TemplateWrapper = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin: 3%;
`

const StoryWrapper = styled.div`
width: 100%;
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
display: flex;
margin: 3%;
`

const H1 = styled.h1`
font-size: 2rem;
`

const H2 = styled.h2`
font-size: 1.5rem;
margin: 3%;
`

const H3 = styled.h3`
font-size: 1rem;
margin: 0% 3% 3% 3%;
`

const Story = styled.textarea`
width: 80%;
height: 200px;
margin: 0% 3%;
background-color: #f8f8f8;
border: 2px solid #ccc;
border-radius: 4px;
outline: none;
overflow: auto;
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
        <H2>First, help everyone celebrate your big day with you, by telling us how you met.</H2> 
        <H3>You can come back here to change, edit, or update your story at any time.</H3> 
        <form>
        <Story
            type='text'
            placeholder='Couple Story'
            name='story'
            value={this.state.story}
            onChange={this.inputHandler}
            wrap='soft'
          />
          <H2>Now tell us about the proposal.</H2>
          <Story
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
            <Link to='/design3'>Design 3</Link>
          </div>
        </div>
        <button>Preview</button>
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
      </div>
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
