import React from 'react'
import { Media } from 'reactstrap'
import styled from 'styled-components'

import Wedd1 from './PremiumMedia/Wedding01.jpg'
import Wedd5 from './PremiumMedia/wedding05.jpg'
import Wedd4 from './PremiumMedia/wedding04.jpg'

const Img = styled.img`
  border-radius: 50%;
  margin: 3% 0%;
`

const PRWrapper = styled.div`
  margin-top: 3%;
  border-top: 7px double black;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`

const PricingReviews = () => {
  return (
    <PRWrapper>
      <Media className='text-center'>
        <Media body>
          <Img src={Wedd1} alt='Two Titanic Llammas' />
          <Media heading>Mr.& Mrs. Jack Dawson</Media>I reached out after
          noticing I made some mistakes with my dashboard. Less than 30 minutes
          later I was contacted by a representative who had the issue fixed
          before she emailed me! We continued the conversation for several
          minutes, which contained nothing but positive vibes and an attitude of
          service! Very willing to help, great service!
        </Media>
      </Media>
      <Media className='text-center'>
        <Media body>
          <Img src={Wedd5} alt='Mrs and Mrs Banner' />
          <Media heading>Mr. & Mrs. Chandler Bing </Media>
          From start to finish, the customer service and usability was
          top-notch. Each part of planning such a life-changing event was made
          easier with their venue directions, their website templates and prompt
          customer service. 10/10~!
        </Media>
      </Media>
      <Media className='text-center'>
        <Media body>
          <Img src={Wedd4} alt='A dog named Hawkeye' />
          <Media heading>Mr. & Mrs. Clint Barton</Media>
          An Excellent way for new couples to keep track of guest, everything is
          just a click away. It amazes me the number of options that you have
          just through this one website, makes it so easy. Very easy for your
          guest to keep up with your progress of your wedding plans also.
        </Media>
      </Media>
    </PRWrapper>
  )
}

export default PricingReviews
