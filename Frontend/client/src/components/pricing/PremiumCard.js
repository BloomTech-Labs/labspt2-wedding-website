import React from 'react'
import styled from 'styled-components'

import BlogAV from './PremiumMedia/blogAvatar.png'
import GoogleAV from './PremiumMedia/googleAvatar.png'
import REGAV from './PremiumMedia/registryAvatar.png'
import UploadAV from './PremiumMedia/uploadAvatar.png'

const PCWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    flex-direction: column;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  border: 2px solid #c7c9bd;
  border-radius: 8px;
  margin: 1%;
  background-color: #f6f9e5;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 100%;
    margin: 2% auto;
  }
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justified;
`

const CardTitle = styled.h3`
  margin: 1%;
`

const CardText = styled.p`
  margin: 3%;
`

const Img = styled.img`
  border: 2px solid #c7c9bd;
  border-radius: 50%;
  margin-top: 3%;
`

const PremiumCard = props => {
  return (
    <PCWrapper>
      <CardWrapper>
        <CardBody>
          <Img src={GoogleAV} alt='Google Logo' />
          <CardTitle>Google Maps</CardTitle>
          <CardText>
            Easily have guests navigate to your venue at the press of a button.
          </CardText>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardBody>
          <Img src={UploadAV} alt='Cloud Logo' />
          <CardTitle>Live upload</CardTitle>
          <CardText>
            Every photo. One place. No more searching hastags.
          </CardText>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardBody>
          <Img src={REGAV} alt='Registry Logo' />
          <CardTitle>Registry</CardTitle>
          <CardText>Have all of your registries in one place.</CardText>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardBody>
          <Img src={BlogAV} alt='Blog Logo' />
          <CardTitle>Blog Page</CardTitle>
          <CardText>
            Share a little more with your guests. Add a blog page and share the
            little things.
          </CardText>
        </CardBody>
      </CardWrapper>
    </PCWrapper>
  )
}

export default PremiumCard
