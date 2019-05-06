import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap'
import googleAvatar from './PremiumMedia/googleAvatar.png'

const Example = props => {
  return (
    <Row>
      <Col sm='3'>
        <Card
          body
          className='text-center'
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg
            top
            width='100%'
            src='./PremiumMedia/googleAvatar.png'
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h3'>Google Maps</CardTitle>
            <CardText>
              Easily have guest navigate to your venue at the press of a button.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col sm='3'>
        <Card
          body
          className='text-center'
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg
            top
            width='100%'
            src='./PremiumMedia/googleAvatar.png'
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h3'>Live upload</CardTitle>
            <CardText>
              Every photo. One place. No more searching hastags.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col sm='3'>
        <Card
          body
          className='text-center'
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg
            top
            width='100%'
            src='./PremiumMedia/googleAvatar.png'
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h3'>Registry</CardTitle>
            <CardText>Have all of your registries in one place.</CardText>
          </CardBody>
        </Card>
      </Col>

      <Col sm='3'>
        <Card
          body
          className='text-center'
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg
            top
            width='100%'
            src='./PremiumMedia/googleAvatar.png'
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h3'>Blog Page</CardTitle>
            <CardText>Have all of your registries in one place.</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Example
