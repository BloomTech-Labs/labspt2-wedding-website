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

const PremiumCard = props => {
  return (
    <Row>
      <Col sm='3'>
        <Card
          body
          className='text-center'
          body
          inverse
          style={{ backgroundColor: '#6ba1cb', borderColor: '52c4b9' }}>
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
          style={{ backgroundColor: '#6ba1cb', borderColor: '52c4b9' }}>
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
          style={{ backgroundColor: '#6ba1cb', borderColor: '52c4b9' }}>
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
          style={{ backgroundColor: '#6ba1cb', borderColor: '52c4b9' }}>
          <CardBody>
            <CardTitle tag='h3'>Blog Page</CardTitle>
            <CardText>Have all of your registries in one place.</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default PremiumCard
