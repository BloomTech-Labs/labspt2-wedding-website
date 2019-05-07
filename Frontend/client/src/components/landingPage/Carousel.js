import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import his from '../../Images/boutonniere.jpg'
import her from '../../Images/beautiful-bouquet-bridal-313707.jpg'
import together from '../../Images/partyTable.jpg'
import arrow from '../../Images/arrowToCerm.jpg'
import styled from 'styled-components'



class DemoCarousel extends Component {
    render(){
        return (
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
                    <p className="legend">From his side,</p>
                </div>
                <div>
                    <img src={her} alt="2"  />
                    <p className="legend">and Her side,</p>
                </div>
                <div>
                    <img src={arrow} alt="3"  />
                    <p className="legend">getting everyone together</p>
                </div>
                <div>
                    <img src={together} alt="4" />
                    <p className="legend">It's what we do</p>
                </div>                
            </Carousel>
        )
    }
};

export default DemoCarousel;