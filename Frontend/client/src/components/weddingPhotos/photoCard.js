import React,{ Component } from 'react'


const PhotoCard = props =>{
    const {caption, imgURL, name} = props.info
    return(
        <div>
                <div>
                <h4>Posted by:{name} </h4>
                </div>
                    <img src={imgURL} alt={`image uploaded by ${name}`} />
                

        </div>
    )
}

export default PhotoCard;