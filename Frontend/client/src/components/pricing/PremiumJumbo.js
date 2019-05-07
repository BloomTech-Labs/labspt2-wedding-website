import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Jumbo = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className='display-3, text-center'>Why choose Premium?</h1>
          <p className='text-center'>
            Let us take the hitch out of getting hitched.
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Jumbo
