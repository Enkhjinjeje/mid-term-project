import React from "react";
import styled from "styled-components";
import YogaLady from "../images/image 3.png"
import FacebookLogo from "../images/facebook.png"
import GoogleLogo from "../images/google.png"
import TwitterLogo from "../images/twitter.png"

const About = styled.div`
height: 50vh;
width: 100%;
background-color: #C8EAEC;
flex-direction: row;
display: flex;
`
const Left = styled.div`
height: 50vh;
width: 25%;
padding-left: 5vw;
`
const MyAccount = styled.div`
height: 20vh;
width: 20vw;
justify-content: center;
display: flex;
flex-direction: column;
text-align: left;
padding-left: 5vw;
font-size: 25px;
h1{
  padding-bottom: 20px;
}
p{
  font-size: 40px;
}
padding-top: 5vh;
`
const Contacts = styled.div`
 flex-direction: row;
 display: flex;
 width: 20vw;
 height: 10vh;
 margin-left: 4vw;
 margin-top: 7vh;
`
const Rigth = styled.div`
height: 50vh;
width: 25vw;
text-align: left;
flex-direction: column;
display: flex;
padding-top: 7vh;
font-size: 25px;
h1{
  padding-bottom: 20px;
}
p{
  font-size: 40px;
}
`
const Yoga = styled.img`

`
const Facebook = styled.img`
height: 8vh;
width: 5vw;
padding: 20px;
`
const Google = styled.img`
height: 8vh;
width: 5vw;
padding: 20px;
`
const Twitter = styled.img`
height: 8vh;
width: 5vw;
padding: 20px;
`

export const Contact = () => {
  return (
    <About>
     <Left>
        <MyAccount>
          <h1>My account</h1>
          <p>Log in</p>
          <p>Register</p>
        </MyAccount>
        <Contacts>
          <Facebook src={FacebookLogo}/>
          <Twitter src={TwitterLogo}/>
          <Google src={GoogleLogo}/>
        </Contacts>
     </Left>
     <Rigth>
        <h1>Pages</h1>
        <p>Home</p>
     </Rigth>
     <Yoga src={YogaLady}/>
    </About>
  );
};