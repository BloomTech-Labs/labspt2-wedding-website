import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Background1 from '../design/media/ScrapBookBackground.jpg'
import Background2 from '../design/media/BackgroundDesign2.jpg'
import Background3 from '../design/media/rainbowbackground.jpg'

const URL = 'https://joinourbigday.herokuapp.com'

const DesignBody = styled.div`
  background: white;
  border-radius: 8px;
  margin: 0% 3% 3% 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

const TemplateWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  width: 100%;
  padding: 3%;
  align-items: center;
`

const StoryWrapper = styled.div`
  width: 100%;
`

const SampleWrapper1 = styled.div`
  background-image: url(${Background1});
  width: 65%;
  height: 160px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 3%;
`
const SampleWrapper2 = styled.div`
  background-image: url(${Background2});
  width: 65%;
  height: 160px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 3%;
`
const SampleWrapper3 = styled.div`
  background-image: url(${Background3});
  width: 65%;
  height: 160px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 3%;
`

const InputWrapper = styled.div`
  margin: 3%;
  padding: 3%;
`

const Button = styled.button`
  width: 30%;
  height: 30px;
  border-radius: 8px;
  margin: 3% auto;
  display: flex;
  justify-content: center;
`

const Head = styled.div`
  display: flex;
  margin: 3%;
`

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 3%;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 1rem;
  margin: 0% 3% 3% 3%;
  text-align: center;
`

const Story = styled.textarea`
  width: 80%;
  height: 200px;
  background-color: #f8f8f8;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  overflow: auto;
  margin: 0 auto;
  display: flex;
`

const P = styled.p`
  font-size: 1rem;
  text-align: center;
`

const SW = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const DesignInput = styled.input`
  height: 30px;
  width: 100%;
`

const URLInput = styled.input`
  height: 30px;
  width: 50%;
  margin: 0 auto;
  display: flex;
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
      .post(`${URL}/customSite/${this.props.user.id}`, this.state)
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
          <H1>
            Here you can create your own personal web page for your wedding.
          </H1>
        </Head>
        <StoryWrapper>
          <H2>
            First, help everyone celebrate your big day with you, by telling us
            how you met.
          </H2>
          <H3>
            You can come back here to change, edit, or update your story at any
            time.
          </H3>
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
            <H2>
              Select your background by entering the corresponding number in the
              space below the samples
            </H2>
          </div>
          <SW>
            <P>1</P>
            <SampleWrapper1>
              <Link to='/design1' />
            </SampleWrapper1>
          </SW>
          <SW>
            <P>2</P>
            <SampleWrapper2>
              <Link to='/design2' />
            </SampleWrapper2>
          </SW>
          <SW>
            <P>3</P>
            <SampleWrapper3>
              <Link to='/design3' />
            </SampleWrapper3>
          </SW>
          <H3>Enter your selection here</H3>
          <form>
            <DesignInput
              type='number'
              placeholder='1'
              name='siteDesign'
              min='1'
              max='3'
              value={this.state.siteDesign}
              onChange={this.inputHandler}
            />
          </form>
        </TemplateWrapper>
        <Button>Preview</Button>
        <InputWrapper>
          <H2>One last step and you are finished.</H2>
          <H2>Now tell us what you want your web site's address to be.</H2>
          <form>
            <URLInput
              type='text'
              placeholder='Site Url'
              name='userUrl'
              value={this.state.userUrl}
              onChange={this.inputHandler}
            />
            <H2>
              If you are happy with everything you entered, just hit the apply
              button, and we'll take care fo the rest.
            </H2>
            <Button onClick={this.handleSubmit}>Apply</Button>
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
