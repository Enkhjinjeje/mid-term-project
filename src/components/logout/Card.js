import React from "react";
import styled from "styled-components";
import JoinIcon from "../images/icons8-running-40.png";
import LocationIcon from "../images/icons8-location-25.png";
import TimeIcon from "../images/icons8-clock-25.png";
import { Link } from "react-router-dom";
import { MainDataContext } from "../context/test-context";
import { useContext } from "react";
const BoxStyle = styled.div`
  height: 40vh;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 8px;
  width: 14vw;
  margin: 1%;
  img {
    height: 18vh;
    width: 14vw;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  a:link {
    text-decoration: none;
  }
`;
const TitleContainer = styled.div`
  width: 14vw;
  height: 6vh;
  align-items: center;
  display: flex;
`;
const Title = styled.p`
  color: #172b4d;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1vh;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-family: Montserrat;
`;
const Location = styled.p`
  color: #637392;
  font-size: 22px;
  margin-left: 1vw;
  margin-top: 1vh;
  img {
    height: 2vh;
    width: 1vw;
    margin-right: 10px;
  }
`;
const Time = styled.p`
  color: #637392;
  font-size: 22px;
  margin-left: 1vw;
  margin-top: 1vh;
  img {
    height: 2vh;
    width: 1vw;
    margin-right: 10px;
  }
`;
const JoinButton = styled.button`
  height: 5vh;
  width: 12vw;
  background: #7fc4bc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 64px;
  border: none;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  h3 {
    color: #fafafa;
  }
  margin-left: 1vw;
  margin-top: 1vh;
  img {
    height: 4vh;
    width: 2vw;
  }
`;

export const Card = ({ cardData }) => {
  const { image, title, location, time, id } = cardData;
  return (
    <BoxStyle>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <img src={image} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Location>
        <img src={LocationIcon}></img>
        {location}
      </Location>
      <Time>
        <img src={TimeIcon}></img>
        {time}
      </Time>
      <Link to={`/userprofile/${id}`} key={id}>
        <JoinButton>
          <h3>Join Class</h3>
          <img src={JoinIcon}></img>
        </JoinButton>
      </Link>
    </BoxStyle>
  );
};
