import React from "react";
import styled from "styled-components";

const BoxStyle = styled.div`
 height: 40vh;
 border: 1px solid black;
 width: 13vw;
 margin: 1%;
 img{
   height: 18vh;
   width: 13vw;
 }
`


export const Card = ({cardData}) => {
    const {image, title, location} = cardData;
    return (
        <BoxStyle>
           <img src={image} />
           <h1>{title}</h1>
           <h1>{location}</h1>
        </BoxStyle>
    )
}