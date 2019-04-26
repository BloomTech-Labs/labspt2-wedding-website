// importing dependencies
import React from 'react'
import { Route, Link } from 'react-router-dom'
import planning from '../../Images/beautiful-beverage-black-coffee-1410226.jpg'

import styled from 'styled-components'

import Login from './login'
import DemoCarousel from './Carousel'
import Dashboard from '../pages/Dashboard'

const LPStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024) {
    width: 1000px;
    margin: 0;
  }
`
const CaroDiv = styled.div`
  margin: 30px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img{
    height: 60vh;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top:20px;
  width: 200px;
  background-color:#52C4B9;
  border-radius: 30px;
  transition: all .2s ease-in-out;

  :hover{
    transform: scale(1.1);
    width:250px;
    background-color:#2D4058;
    box-shadow: 18px -3px 79px -10px rgba(96,219,217,0.63);
  }
  p{
    color: #ffff;
    text-decoration:none;
    align-content: center;
    margin: 0 auto;
  }
  
`

const InfoLeft = styled.div`
display:flex;
width 100%;
margin: 0 auto;
margin-bottom: 40px;
background-color: white;
img{
  width: 33%;
}
`
const InfoRight = styled.div`
display:flex;
justify-content: space-between;
width 100%;
margin: 0 auto;
margin-bottom: 40px;
background-color: white;
div{
  width:45%;
}
img{
  width: 33%;
}
`


function LandingPage({ match }) {
  return (
    <LPStyle>
      <CaroDiv>
        <DemoCarousel />
      <ButtonDiv>
        <Link to='/login' component={Login} style={{ textDecoration: 'none' }}>
          <p>Get Started</p>
        </Link>
      </ButtonDiv>
     </CaroDiv>
     <InfoLeft>
        <img src={planning} alt='image'/>
        <div></div>
     </InfoLeft>
     <InfoRight>
        <div><p>af;ho'iare'ona'vr'oi'io'hoi</p></div>
        <div><img src={planning} alt='image'/></div>
     </InfoRight>
     <InfoLeft>
        <div><img src={planning} alt='image'/></div>
        <div></div>
     </InfoLeft>




    </LPStyle>
  )
}

export default LandingPage
