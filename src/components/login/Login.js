import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import FaceBookLogo from "../images/Group 64.png";
import GoogleLogo from "../images/Group 63.png";
import RigthIamge from "../images/Login.png";

const Whole = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled.div`
  height: 100%;
  background-color: #c8eaec;
  width: 60vw;
  position: absolute;
  left: 40vw;
`;
const RigthImg = styled.img`
  height: 99vh;
  width: 60vw;
`;
const Left = styled.div`
  width: 44vw;
  height: 100vh;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0px;
`;
const Title = styled.div`
  padding-left: 7vw;
  padding-top: 5vh;
  font-size: 50px;
`;
const RegisterButton = styled.div`
  padding-left: 7vw;
  padding-top: 1vh;
`;
const Inputs = styled.div`
  width: 30vw;
  height: 20vh;
  padding-left: 7vw;
  padding-top: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    background-color: #f5f6fa;
    width: 30vw;
    height: 7vh;
    border: 1px solid #c4c4c4;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
  }
`;
const Forgot = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 7vw;
  padding-top: 3vh;
  width: 30vw;
  justify-content: space-between;
`;
const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 7vw;
  input {
    width: 2vw;
    height: 2vh;
    background-color: #7fc4bc;
    border-radius: 10px;
  }
`;
const ForgotPass = styled.div`
  color: #7fc4bc;
`;
const LoginButton = styled.button`
  margin-left: 12vw;
  margin-top: 5vh;
  width: 20vw;
  height: 8vh;
  border: 4px solid #7fc4bc;
  box-sizing: border-box;
  border-radius: 64px;
  font-size: 40px;
  color: #7fc4bc;
  background-color: #f5f6fa;
`;
const Lines = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 7vw;
  width: 30vw;
  align-items: center;
  justify-content: space-between;
  padding-top: 10vh;
`;
const LineOne = styled.div`
  border: 1px solid #000000;
  width: 14vw;
  height: 0px;
`;
const LineTwo = styled.div`
  width: 14vw;
  height: 0px;
  border: 1px solid #000000;
`;
const MoreSign = styled.div`
  margin-left: 7vw;
  margin-top: 7vh;
  width: 30vw;
  height: 7vh;
  display: flex;
  justify-content: space-evenly;
`;
const Google = styled.img`
  height: 8vh;
  width: 5vw;
`;
const FaceBook = styled.img`
  height: 8vh;
  width: 5vw;
`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <Whole>
      <Right>
        <RigthImg src={RigthIamge} />
      </Right>
      <Left>
        <Title>Log in</Title>
        <RegisterButton>
          Don't have an account? <Link to="/register">Register</Link> now.
        </RegisterButton>
        <Inputs>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Inputs>
        <Forgot>
          <Checkbox>
            <input type="checkbox" />
            <p>Remember me</p>
          </Checkbox>
          <ForgotPass>
            <p>Forgot e-mail/password?</p>
          </ForgotPass>
        </Forgot>
        <LoginButton
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </LoginButton>
        <Lines>
          <LineOne></LineOne>
          <p>or</p>
          <LineTwo></LineTwo>
        </Lines>
        <MoreSign>
          <Google src={GoogleLogo}  onClick={() => signInWithGoogle(email, password)}/>
          <FaceBook src={FaceBookLogo}/>
        </MoreSign>
        {/* <button onClick={signInWithGoogle}>Login with Google</button> */}
      </Left>
    </Whole>
  );
}

export default Login;
