import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import his from '../../Images/boutonniere.jpg'
import her from '../../Images/beautiful-bouquet-bridal-313707.jpg'
import together from '../../Images/partyTable.jpg'
import arrow from '../../Images/arrowToCerm.jpg'
import styled from 'styled-components'

const P = styled.p`
  font-size: 2rem;
  margin-top: 1%;
  margin-bottom: 3%;
  color: white;
`

const Div = styled.div`
  max-width: 900px;
`

class DemoCarousel extends Component {
    render(){
        return (
            <Div>
            <Carousel 
            autoPlay 
            transitionTime='2000'
             interval='8000' 
             infiniteLoop={true}
             showThumbs={false} 
             showStatus={false}
            > 
                <div>
                    <img src={his} alt="1" />
                    <P>From his side,</P>
                </div>
                <div>
                    <img src={her} alt="2"  />
                    <P>to her side,</P>
                </div>
                <div>
                    <img src={arrow} alt="3"  />
                    <P>getting everyone together.</P>
                </div>
                <div>
                    <img src={together} alt="4" />
                    <P>It's what we do.</P>
                </div>                
            </Carousel>
            </Div>
        )
    }
};

export default DemoCarousel;