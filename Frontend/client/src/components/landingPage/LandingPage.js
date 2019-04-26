// importing dependencies
import React from 'react'
import { Route, Link } from 'react-router-dom'
import planning from '../../Images/beautiful-beverage-black-coffee-1410226.jpg'
import rings from '../../Images/rings.jpg'

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
  background-image: url(rings);
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
    font-size: 20px;
  }
  
`

const InfoLeft = styled.div`
display:flex;
justify-content: space-around;
width 85%;
margin: 0 auto;
margin-bottom: 40px;
background-color: white;
border-radius 60%;
border: 3px solid #52C4B9;
div{
  width: 50%;
  justify-self: center;
  align-self: center;
  p{
    width: 80%;
    margin-left: -60px;
    margin-right: 40px
  }
}
img{
  width: 75%;
  border-radius:40%;
  
  margin-left:-2%;
}
`
const InfoRight = styled.div`
display:flex;
width 100%;
margin: 0 auto;
margin-bottom: 40px;
background-color: white;
border-radius 60%;
border: 3px solid #52C4B9;
img{
  width: 33%;
  border-radius:60%;
  border: 3px solid #52C4B9;
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
     <InfoLeft className='topleft'>
        <div><img src={planning} alt='image'/></div>
        <div><p>ther is no text wihtin this div</p></div>
     </InfoLeft>
     <InfoRight>
        <div>
          
        </div>
        <div><img src={planning} alt='image'/></div>
     </InfoRight>
     <InfoLeft>
        <div><img src={planning} alt='image'/></div>
        <div><p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go
             someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch
              in the kneecaps.
               </p></div>
     </InfoLeft>




    </LPStyle>
  )
}

export default LandingPage
