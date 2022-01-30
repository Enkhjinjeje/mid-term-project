import React from "react";
import styled from "styled-components";
import Border from "../images/Mask.png";
import Amin from "../images/Group 38.png"

const Commen = styled.div`
  background-color: #97cfc9;
  height: 100vh;
  width: 100%;
  position: relative;
`;
const CommentBor = styled.img`
  height: 100%;
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 37vw;
  top: 10vh;
  color: white;
  font-size: 40px;
`;
const CommentRewiew = styled.img`
height: 60vh;
width: 20vw;
padding: 20px;
`
const Comments = styled.div`
height: 55vh;
width: 70vw;
position: absolute;
top: 20vh;
left: 15vw;
`

export const Comment = () => {
  return (
    <Commen>
      <CommentBor src={Border} />
      <Title>
        <h1>COMMENT</h1>
      </Title>
      <Comments>
        <CommentRewiew src={Amin} />
        <CommentRewiew src={Amin} />
        <CommentRewiew src={Amin} />
      </Comments>
    </Commen>
  );
};
