import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import styled from "styled-components";
import FaceBookLogos from "../images/Group 125.png";
import GoogleLogos from "../images/Group 126.png";
import RigthPhoto from "../images/Frame 9.png";

const Whole = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 45vw;
  height: 100vh;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0px;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  input {
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 1000px;
  }
`;
const Title = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  font-size: 50px;
`;
const InputTop = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  flex-direction: row;
  display: flex;
  width: 30vw;
  justify-content: space-between;
  input {
    width: 13vw;
    height: 6vh;
  }
  p {
    color: grey;
  }
`;
const InputPassword = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  width: 30vw;
  input {
    width: 30vw;
    height: 6vh;
  }
  p {
    color: grey;
  }
`;
const InputPasswordConfirm = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  width: 30vw;
  input {
    width: 30vw;
    height: 6vh;
  }
  p {
    color: grey;
  }
`;
const InputDate = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  width: 30vw;
  input {
    width: 30vw;
    height: 6vh;
  }
  p {
    color: grey;
  }
`;
const InputEmail = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  width: 30vw;
  input {
    width: 30vw;
    height: 6vh;
  }
  p {
    color: grey;
  }
`;
const FaceGoogle = styled.div`
  padding-left: 7vw;
  padding-top: 4vh;
  width: 30vw;
  display: flex;
  justify-content: space-between;
`;
const RegisterButton = styled.button`
  background-color: #7fc4bc;
  border-radius: 30px;
  margin-left: 7vw;
  margin-top: 4vh;
  color: white;
  width: 30vw;
  height: 6vh;
  font-size: 30px;
`;
const HaveAccount = styled.div`
  padding-left: 13vw;
  padding-top: 3vh;
  width: 30vw;
  height: 2vh;
`;
const Rigth = styled.img`
  width: 80vw;
  height: 100vh;
  position: absolute;
  left: 20vw;
`;
const GooogleButton = styled.img`
width: 14vw;
height: 10vh;
`
const FacebookButton = styled.img`
width: 14vw;
height: 10vh;
`
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, zip, date);
  };
  console.log(user);
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <Whole>
      <Rigth src={RigthPhoto} />
      <Left>
        <Title>
          <p>Sign up</p>
        </Title>
        <Inputs>
          <InputTop>
            <div>
              <p>Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <p>Zip code</p>
              <input
                type="number"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </InputTop>
          <InputPassword>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputPassword>
          <InputPasswordConfirm>
            <p>Confirm password</p>
            <input
              type="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputPasswordConfirm>
          <InputDate>
            <p>Date of birth</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </InputDate>
          <InputEmail>
            <p>E-mail</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputEmail>
        </Inputs>
        <RegisterButton onClick={register}>Sign up</RegisterButton>
        <HaveAccount>
          Already have an account? <Link to="/login">Log in</Link>
        </HaveAccount>
        <FaceGoogle>
          <GooogleButton src={GoogleLogos} onClick={signInWithGoogle} />
          <FacebookButton src={FaceBookLogos} />
        </FaceGoogle>
      </Left>
    </Whole>
  );
}

export default Register;
export { auth };
