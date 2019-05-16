import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
    margin: 25px auto;
    display: flex;
    width: 55%;
    height: auto;
    justify-content: center;
    align-items: center;

    img{
        max-height: 80vh;
        width:90%;
        height: auto;
        margin-top: 2%;
    
    }
`
const Body = styled.div `
    width: 90%;
    h5{
        text-align: left;
    }
`

const PhotoCard = props =>{
    const {caption, imgURL, name} = props.info
    return(
        <>
            <Card className="card">
           {/* <div className="card-header">
                        <h4>{name}</h4> 
           </div> */}
                <img src={imgURL} alt="user posted photo" className="card-img-top"/>
                <Body className="card-body ">
                   <h5 className="card-title">Posted by:{name}</h5>
                   <p>"{caption}"</p>
               </Body>
        
            </Card>
        </>
    )
}

export default PhotoCard;