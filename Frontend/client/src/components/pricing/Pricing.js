import React, { Component } from 'react'
import styled from 'styled-components'
import './pricing.css'

const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-width: 1024px;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
    min-width: 1080px;
    justify-content: center;
    align-items: center;


    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        flex-direction: column;
        width: 100%;
        min-width: 350px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
`;

const PriceArea = styled.div`
    width: 400px;
    background-color: white;  
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

`;

const HRStyle = styled.hr`
    width: 50%;
`;

const BoxLI = styled.li`
  list-style-type: none;
  margin: 5px 0;
`

const PricingLogo = styled.h1`
  text-align: center;
`

const BoxList = styled.ul`
  display: flex;
  flex-direction: column;
`

const H2 = styled.h2`
  text-align: center;
`

export default class Pricing extends Component {
    render() {
        return (
             <Price>
             <PriceArea className="effect2">
                 <PricingLogo>Pricing</PricingLogo>
                 <HRStyle />
                 <Box>
                    <BoxList>
                        <BoxLI>Planning Dashboard</BoxLI>
                        <BoxLI>Digital RSVPs</BoxLI>
                        <BoxLI>Free Website Hosting</BoxLI>
                        <BoxLI>Wedding Website</BoxLI>
                    </BoxList>
                 </Box>
                 <HRStyle />
                 <H2>$0</H2>                 
             </PriceArea>

             </Price>
        );
    }
}
