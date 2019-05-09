import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateSite } from '../../actions/index'

import Background1 from '../design/media/background1.jpg'
import Background2 from '../design/media/background2.jpg'
import Background3 from '../design/media/background3.jpg'

const DesignBody = styled.div`
  background: white;
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
  font-size: 1em;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% 3% 3% 3%;
  width: 30.3%;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    display: flex;
    margin: 3% auto;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    // width: 60%;
    display: flex;
    margin: 3% auto;
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

class EditSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteDesign: this.props.customSite.siteDesign,
      userUrl: this.props.customSite.userUrl,
      story: this.props.customSite.story,
      proposalStory: this.props.customSite.proposalStory,
    }
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled')
  }

  back = () => {
    this.props.back()
  }

  update = e => {
    e.preventDefault()
    this.props.updateSite(this.props.id, this.state)
    this.props.back()
  }

  render() {
    return (
      <StoryWrapper>
        <Head>
          <H1>Edit your Site</H1>
        </Head>
        <form>
          <StoryWrapper>
            <H2>Couple Story</H2>
            <Story
              type='text'
              placeholder='Couple Story'
              name='story'
              value={this.state.story}
              onChange={this.inputHandler}
              wrap='soft'
            />
            <H2>Proposal Story</H2>
            <Story
              type='text'
              placeholder='Proposal Story'
              name='proposalStory'
              value={this.state.proposalStory}
              onChange={this.inputHandler}
            />
            <H2>Background</H2>
            <TemplateWrapper>
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
                  value={this.state.siteDesign}
                  onChange={this.inputHandler}
                />
              </form>
            </TemplateWrapper>
            <InputWrapper>
              <H2>Site Url</H2>
              <form>
                <URLInput
                  type='text'
                  placeholder='Example= johnandjanesmithwedding...'
                  name='userUrl'
                  value={this.state.userUrl}
                  onChange={this.inputHandler}
                />
              </form>
            </InputWrapper>
            <ButtonWrapper>
              <Button onClick={this.update}>Save Changes</Button>
              <Button>Preview</Button>
            </ButtonWrapper>
          </StoryWrapper>
        </form>
        <ButtonWrapper>
          <Button onClick={this.back}>Back</Button>
        </ButtonWrapper>
      </StoryWrapper>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  { updateSite }
)(EditSite)
