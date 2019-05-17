import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchSite, addSite, updateSite, deleteSite } from '../../actions/index'
import EditSite from './editDesign'

import styled from 'styled-components'

import Background1 from '../design/media/background1.jpg'
import Background2 from '../design/media/background2.jpg'
import Background3 from '../design/media/background3.jpg'

const DesignBody = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin: 3% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
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
  height: 260px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 3%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    height: 137px;
  }
`
const SampleWrapper2 = styled.div`
  background-image: url(${Background2});
  width: 65%;
  height: 260px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 3%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    height: 137px;
  }
`
const SampleWrapper3 = styled.div`
  background-image: url(${Background3});
  width: 65%;
  height: 260px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 3%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    height: 137px;
  }
`

const InputWrapper = styled.div`
  margin: 3%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonWrapper = styled.div`
  margin: 3%;
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    flex-direction: column;
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

const Head = styled.div`
  display: flex;
  margin: 3%;
`

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 3%;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 1rem;
  margin: 3%;
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
  padding: 1%;
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
  padding: 0.5%;
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
      site: {
        siteDesign: null,
        userUrl: '',
        story: '',
        proposalStory: '',
      },
      edit: false,
    }
  }

  componentDidMount() {
    this.props.fetchSite(this.props.user.id)
  }

  handleSubmit = e => {
    console.log('submit Fire')
    console.log(this.props.user.id)
    this.props.addSite(this.props.user.id, this.state.site)
  }

  inputHandler = e => {
    e.preventDefault()
    const { site } = { ...this.state }
    const currentState = site
    const { name, value, type } = e.target
    currentState[name] = type === 'number' ? parseInt(value) : value
    this.setState({
      user: value,
    })
    console.log('input handled')
  }
  EditInputHandler = e => {
    e.preventDefault()
    const { editSite } = { ...this.state }
    const currentState = editSite
    const { name, value, type } = e.target
    currentState[name] = type === 'number' ? parseInt(value) : value
    this.setState({
      user: value,
    })
    console.log('input handled')
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.deleteSite(this.props.user.id)
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    })
    console.log(this.state)
  }

  handleUpdate = e => {
    e.preventDefault()
    this.props.updateSite(this.props.user.id)
  }

  render() {
    console.log('props', this.props)
    if (!this.props.customSite) {
      return (
        <DesignBody>
          <Head>
            <H1>
              Here you can create your own personal web page for your wedding.
            </H1>
          </Head>
          <StoryWrapper>
            <H2>
              First, help everyone celebrate your big day with you, by telling
              us how you met.
            </H2>
            <H3>
              You can come back here to change, edit, or update your story at
              any time.
            </H3>
            <form>
              <Story
                type='text'
                placeholder='Couple Story'
                name='story'
                value={this.state.site.story}
                onChange={this.inputHandler}
                wrap='soft'
              />
              <H2>Now tell us about the proposal.</H2>
              <Story
                type='text'
                placeholder='Proposal Story'
                name='proposalStory'
                value={this.state.site.proposalStory}
                onChange={this.inputHandler}
              />
            </form>
          </StoryWrapper>
          <TemplateWrapper>
            <div>
              <H2>
                Select your background by entering the corresponding number in
                the space below the samples
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
                placeholder='#'
                name='siteDesign'
                min='1'
                max='3'
                value={this.state.site.siteDesign}
                onChange={this.inputHandler}
              />
            </form>
          </TemplateWrapper>
          <InputWrapper>
            <H2>One last step and you are finished.</H2>
            <H2>Now tell us what you want your web site's address to be.</H2>
            <form>
              <URLInput
                type='text'
                placeholder='Example= johnandjanesmithwedding...'
                name='userUrl'
                value={this.state.site.userUrl}
                onChange={this.inputHandler}
              />
              <H2>
                If you are happy with everything you entered, just hit the apply
                button, and we'll take care fo the rest.
              </H2>
            </form>
            <Button onClick={this.handleSubmit}>Apply</Button>
            <Link to={`/${this.props.customSite.userUrl}`}>
              <Button>Preview</Button>
            </Link>
          </InputWrapper>
        </DesignBody>
      )
    } else {
      return (
        // need to show site info here and give otions to update/ delete and preview
        <DesignBody>
          {!this.state.edit ? (
            <StoryWrapper>
              <Head>
                <H1>Your Wedding Site</H1>
              </Head>
              <H2>URL</H2>
              <H2>
                https://joinourbigday.netlify.com/
                {this.props.customSite.userUrl}
              </H2>
              <H2>Couple Story</H2>
              <H3>{this.props.customSite.story}</H3>
              <H2>Proposal Story</H2>
              <H3>{this.props.customSite.proposalStory}</H3>
              <H2>Site design Chosen</H2>
              <H3>{this.props.customSite.siteDesign}</H3>
              <ButtonWrapper>
                <Button onClick={this.handleEdit}>Edit Page</Button>
                <Button onClick={this.handleDelete}>Delete</Button>
              </ButtonWrapper>
            </StoryWrapper>
          ) : (
            <EditSite
              customSite={this.props.customSite}
              back={this.handleEdit}
              update={this.handleUpdate}
              id={this.props.user.id}
            />
          )}
        </DesignBody>
      )
    }
  }
}

const mapStateToProps = state => ({
  customSite: state.customSite,
})

export default connect(
  mapStateToProps,
  { fetchSite, addSite, updateSite, deleteSite }
)(Design)
