import React, { Component } from 'react'
import styled from 'styled-components'
import './pricing.css'


const HRStyle = styled.hr`
    width: 50%;
`;


const PricingLogo = styled.h1`
  text-align: center;
`


const H2 = styled.h2`
  text-align: center;
`

export default class Pricing extends Component {
    render() {
        return (
             <div className='pricePage'>
             <div className='priceArea'>
                 <PricingLogo>Pricing</PricingLogo>
                 <HRStyle />
                 <div className='boxStyle'>
                    <ul>
                        <li className='liStyle'>Planning Dashboard</li>
                        <li className='liStyle'>Digital RSVPs</li>
                        <li className='liStyle'>Free Website Hosting</li>
                        <li className='liStyle'>Wedding Website</li>
                    </ul>
                 </div>
                 <HRStyle />
                 <H2>$0</H2>                 
             </div>

             </div>
        );
    }
}
