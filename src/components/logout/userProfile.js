// what kind of auth method
// created, signed in, provider
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import React from "react";
import styled from "styled-components";
import BackImage from "../images/icons8-back-to-96.png";
import { useParams } from "react-router";
import { MainDataContext } from "../context/test-context.js";
import { useContext } from "react";
import LocationIcon from "../images/icons8-location-35.png";
import TimeIcon from "../images/icons8-clock-35.png";
import ScheduleIcon from "../images/icons8-schedule-35.png";
import MemberIcon from "../images/icons8-male-user-35.png";
import { Button } from "./userProfileStyle";
import JoinIcon from "../images/icons8-running-40.png";

const Whole = styled.div``;

const BackButton = styled.img`
  width: 4vw;
  height: 8vh;
  margin-top: 2vh;
  margin-left: 5vw;
`;
const Body = styled.div`
  padding: 4vh;
  display: flex;
  flex-direction: row;
`;

const BigImage = styled.img`
  width: 45vw;
  height: 55vh;
`;
const BodyRigth = styled.div`
padding-left: 3vw;
`;
const SmallImage = styled.div`
width: 45vw;
height: 20vh;
background-color: grey;
`
const BodyLeft = styled.div`
  padding-left: 2vw;
`;
const Title = styled.h1`
padding-left: 4vw;
padding-top: 4vh;
`;
const Location = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 2vh;
`;
const LocationImage = styled.img`
  width: 2vw;
  height: 4vh;
  padding-right: 1vw;
`;
const Time = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 2vh;
`;
const TimeImage = styled.img`
  width: 2vw;
  height: 4vh;
  padding-right: 1vw;
`;
const Schedule = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 2vh;
`;
const ScheduleImage = styled.img`
  width: 2vw;
  height: 4vh;
  padding-right: 1vw;
`;
const Member = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 2vh;
`;
const MemberImage = styled.img`
  width: 2vw;
  height: 4vh;
  padding-right: 1vw;
`;
const Description = styled.div`
 padding-top: 2vh;
`
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
  margin-top: 10vh;
  img {
    height: 4vh;
    width: 2vw;
  }
`;
function UserProfile() {
  const [user] = useAuthState(auth);
  const { data } = useContext(MainDataContext);

  const { userprofileId } = useParams();
  const selectedUser = data.find((user) => user.id === userprofileId);
  return (
    <Whole>
      <Button>
        <BackButton src={BackImage} />
        <Title>{selectedUser.title}</Title>
      </Button>
      <Body>
        <BodyRigth>
          <BigImage src={selectedUser.image} />
          <SmallImage>

          </SmallImage>
        </BodyRigth>
        <BodyLeft>
          <Location>
            <LocationImage src={LocationIcon} />
            <h1>{selectedUser.location}</h1>
          </Location>
          <Time>
            <TimeImage src={TimeIcon} />
            <h1>{selectedUser.time}</h1>
          </Time>
          <Schedule>
            <ScheduleImage src={ScheduleIcon} />
            <h1>{selectedUser.schedule}</h1>
          </Schedule>
          <Member>
            <MemberImage src={MemberIcon} />
            <h1>{selectedUser.member}</h1>
          </Member>
          <Description>
            <p>{selectedUser.description}</p>
          </Description>
          <JoinButton>
          <h3>Join Class</h3>
          <img src={JoinIcon}></img>
        </JoinButton>
        </BodyLeft>
      </Body>
    </Whole>
  );
}
export default UserProfile;  
{
  /* <h1>user profile:</h1>
    <h1>Created time:{user.metadata.creationTime}</h1>
    {user.providerData[0].phoneNumber ? <h1>phone:{user.providerData[0].phoneNumber}</h1> : <h1>Gmail:{user.providerData[0].email}</h1>} */
}
