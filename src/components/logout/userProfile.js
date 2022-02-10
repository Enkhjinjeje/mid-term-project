import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import React from "react";
import BackImage from "../images/icons8-back-to-96.png";
import { useParams } from "react-router";
import { MainDataContext } from "../context/test-context.js";
import { useContext } from "react";
import LocationIcon from "../images/icons8-location-35.png";
import TimeIcon from "../images/icons8-clock-35.png";
import ScheduleIcon from "../images/icons8-schedule-35.png";
import MemberIcon from "../images/icons8-male-user-35.png";
import {
  Button,
  Whole,
  BackButton,
  Body,
  BigImage,
  BodyRigth,
  SmallImage,
  BodyLeft,
  Title,
  Location,
  LocationImage,
  Time,
  TimeImage,
  Schedule,
  ScheduleImage,
  Member,
  MemberImage,
  Description,
  JoinButton,
} from "./userProfileStyle";
import JoinIcon from "../images/icons8-running-40.png";
import { Link } from "react-router-dom";

function UserProfile() {
  const [user] = useAuthState(auth);
  const { data } = useContext(MainDataContext);

  const { userprofileId } = useParams();
  const selectedUser = data.find((user) => user.id === userprofileId);
  return (
    <Whole>
      <Button>
        <Link to="/dashboard">
          <BackButton src={BackImage} />
        </Link>
        <Title>{selectedUser.title}</Title>
      </Button>
      <Body>
        <BodyRigth>
          <BigImage src={selectedUser.image} />
          <SmallImage></SmallImage>
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
