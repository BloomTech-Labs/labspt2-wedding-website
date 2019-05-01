// importing dependencies
import React from 'react'
import { Route, Link } from 'react-router-dom'
import planning from '../../Images/beautiful-beverage-black-coffee-1410226.jpg'
import rings from '../../Images/band-blur-close-up-265730.jpg'
import photo from '../../Images/camera-contemporary-flash-134469.jpg'

import styled from 'styled-components'

import Login from './login'
import DemoCarousel from './Carousel'


const LPStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  background-image: url('https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size:cover;
  background-repeat: no-repeat;
  h1{
    @import url('https://fonts.googleapis.com/css?family=Aguafina+Script');
    font-family: 'Aguafina Script', cursive;
    color:white;
    margin: 30px auto;
    font-size: 80px
    text-shadow: 4px 4px 4px #52C4B9;

  }
  .divider{
    height:8px;
    width:80%;
    border-top: 1px solid #52C4B9;
    border-bottom: 3px solid #52C4B9;
    margin: 10px auto;

  }
  @media screen and (max-width: 1024) {
    width: 1000px;
    margin: 0;
  }
`
const CaroDiv = styled.div`
  margin: 30px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img{
    height: 65vh;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top:125px;
  margin-bottom: 200px;
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
width 90%;
margin: 85px auto;
background-color: white;
border-radius:20%;
border: 3px solid #52C4B9;
div{
  width: 50%;
  justify-self: center;
  align-self: center;
  p{
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    width: 80%;
    margin-left: -60px;
    margin-right: 40px
  }
}
img{
  width: 55%;
  border-radius:40%;
  padding: 6px;
  margin-left: 15%;
}
`
const InfoRight = styled.div`
display:flex;
justify-content: space-around;
width 90%;
margin: 85px auto;
background-color: white;
border-radius:20%;
border: 3px solid #52C4B9;
div{
  width: 50%;
  justify-self: center;
  align-self: center;

  p{
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    width: 80%;
    margin-left:32%;
    text-align: right;

  }
}
img{
  width: 50%;
  border-radius:40%;
  margin-left: 28%;
  padding: 6px;

}
`



function LandingPage({ match }) {
  return (
    <LPStyle>
      <h1>Join Our Big Day</h1>
      <CaroDiv>
        <DemoCarousel />
      <ButtonDiv>
        <Link to='/login' component={Login} style={{ textDecoration: 'none' }}>
          <p>Get Started</p>
        </Link>
      </ButtonDiv>
     </CaroDiv>
     <div className="divider"></div>
     <InfoLeft className='topleft'>
        <div><img src={planning} alt='image'/></div>
        <div><p>We know wedding planning is stressful. At JoinOurBigDay our aim is to remove some of that stress.
          Create a personal page for your wedding where you can send friends and family to RSVP as well as provide date and time information.</p></div>
     </InfoLeft>
     <div className="divider"></div>
     <InfoRight>
        <div>
          <p>there is text in thqrvjoefniu ;or f;quhrfpiuqh rfpqw pfu9h qpwuh vu9qh pcoquv rl hq blciausdjgkf kjalgc ivapiyvwvhk;ajsdg;ufgdkh >.;TA UT;EFUG ;wg97 g;uewg;iugfg is tag</p>
        </div>
        <div><img src={rings} alt='image'/></div>
     </InfoRight>
     <div className="divider"></div>
     <InfoLeft>
        <div><img src={photo} alt='image'/></div>
        <div><p>We offer many other services with our Premium upgrade. Get more pages for a more personalized feel and your very own 
                photo upload for your guests to post to one location. so you don't have to scour social media with hashtags to tread through 
                the clutter of a hastags.
               </p></div>
     </InfoLeft>




    </LPStyle>
  )
}

export default LandingPage
