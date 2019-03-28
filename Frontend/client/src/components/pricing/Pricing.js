import React, { Component } from 'react'
import styled from 'styled-components'

const Price = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid #000000;
    width: 300px;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

const BoxLI = styled.li`
    list-style-type: none;
    margin: 5px 0;
`;

const PricingLogo = styled.h1`
    text-align: center;
`;

const BoxList = styled.ul`
    display: flex;
    flex-direction: column;
`;


export default class Pricing extends Component {
    render() {
        return (
             <Price>
                 <PricingLogo>Pricing</PricingLogo>
                 <hr />
                 <Box>
                    <BoxList>
                        <BoxLI>Planning Dashboard</BoxLI>
                        <BoxLI>Digital RSVPs</BoxLI>
                        <BoxLI>Free Website Hosting</BoxLI>
                        <BoxLI>Wedding Website</BoxLI>
                    </BoxList>
                 </Box>
                 <hr />
                 <h2>$0</h2>
             </Price>
        );
    }
}