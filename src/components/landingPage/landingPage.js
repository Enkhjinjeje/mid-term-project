import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TopImage from "../images/Group.png";
import running from "../images/guij bga ania.png";
import lift from "../images/tumur urguj bga ubba.png";
import yoga from "../images/yoga hij bga ubba.png";
import {Comment} from "./Comment.js";
import { Contact } from "./contact";
const Navbar = styled.div`
  width: 100%;
  height: 6vh; ;
`;
const Button = styled.div`
  width: 18vw;
  right: 70px;
  position: absolute;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Login = styled.button`
  width: 8vw;
  border: none;
  background-color: white;
  color: #7fc4bc;
`;
const Sign = styled.button`
  width: 8vw;
  background-color: #7fc4bc;
  height: 4vh;
  border-radius: 64px;
  border: none;
  color: white;
`;
const Top = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${TopImage});
  background-repeat: no-repeat;
  background-size: contain;
`;
const TopText = styled.div`
  flex-direction: column;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
const TopBottom = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopButton = styled.button`
  border: none;
  height: 9vh;
  width: 18vw;
  background-color: #ffdebb;
  border-radius: 64px;
  border: none;
  color: black;
  box-shadow: 0px 8.41505px 16.8301px rgba(0, 0, 0, 0.1);
  font-size: 30px;
`;
const About = styled.div`
  margin-top: 40px;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Yoga = styled.img`
  height: 60vh;
  width: 20vw;
  margin-right: 50px;
`;
const YogaText = styled.div`
display: flex;
height: 60vh;
margin-left: 50px;
flex-direction: column;
justify-content: center;
text-align: left;
h1{
  margin-bottom: 40px;
  font-size: 50px;
}
p{
  font-size: 20px;
}
`
const AboutYoga = styled.div`
flex-direction: row;
display: flex;
`
const AboutLift = styled.div`
flex-direction: row;
display: flex;
`
const Lift = styled.img`
 height: 60vh;
  width: 20vw;
  margin-left: 200px;
`
const LiftText = styled.div`
display: flex;
height: 60vh;
margin-right: 50px;
flex-direction: column;
justify-content: center;
text-align: left;
h1{
  margin-bottom: 40px;
  font-size: 50px;
}
p{
  font-size: 20px;
}
`
const Run = styled.img`
  height: 60vh;
  width: 25vw;
  margin-right: 50px;
`;
const RunText = styled.div`
display: flex;
height: 60vh;
margin-left: 50px;
flex-direction: column;
justify-content: center;
text-align: left;
h1{
  margin-bottom: 40px;
  font-size: 50px;
}
p{
  font-size: 20px;
}
`
const AboutRun = styled.div`
flex-direction: row;
display: flex;
padding-bottom: 10vh;
`
function landingPage() {
  return (
    <div>
      <Navbar>
        <Button>
          <Link to="login">
            <Login>Login</Login>
          </Link>
          <Link to="register">
            <Sign>SIGN UP</Sign>
          </Link>
        </Button>
      </Navbar>
      <Top>
        <TopText>
          <h1>Anywhere fitness</h1>
          <p>it is simple to get in shape</p>
          <p>and stay in shape</p>
        </TopText>
        <TopBottom>
          <Link to="register">
            <TopButton>SIGN UP</TopButton>
          </Link>
        </TopBottom>
      </Top>
      <About>
        <AboutYoga>
          <Yoga src={yoga} />
          <YogaText>
            <h1>Fitness club</h1>
            <p>What can you gain from exercise?</p>
            <p>Discover your “why” with inspiration guides</p>
            <p>guides , stories , and more.</p>
          </YogaText>
        </AboutYoga>
        <AboutLift>
          <LiftText>
            <h1>Fitness club</h1>
            <p>We create an environment where are</p>
            <p>can relax go at your own pace and</p>
            <p>do your own thing without ever</p>
            <p>having to worry about being judged.</p>
          </LiftText>
          <Lift src={lift}/>
        </AboutLift>
        <AboutRun>
          <Run src={running}/>
          <RunText>
            <h1>Fitness club</h1>
            <p>We create an environment where are</p>
            <p>can relax go at your own pace and</p>
            <p>do your own thing without ever</p>
            <p>having to worry about being judged.</p>
          </RunText>
        </AboutRun>
      </About>
      <Comment />
      <Contact />
    </div>
  );
}

export default landingPage;
