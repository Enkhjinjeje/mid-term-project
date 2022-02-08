import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "../firebase";
import { Checkbox } from "@mui/material";
import styled from "styled-components";
import { MainDataContext } from "../context/test-context";
import { Card } from "./Card";
import { useContext } from "react";
const Whole = styled.div`
  display: flex;
  flex-direction: row;
`;
const Navbar = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: #fafafa;
`;
const LogOutButton = styled.button`
  width: 10vw;
  height: 5vh;
  background-color: #fafafa;
  border: 4.20752px solid #7fc4bc;
  box-sizing: border-box;
  border-radius: 134.641px;
  color: #7fc4bc;
  margin-left: 86vw;
  margin-top: 1vh;
`;
const Left = styled.div`
  width: 25vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`;
const Running = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const Weight = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const Morning = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const Afternoon = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const Night = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const NewYork = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const Chicago = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const LosAngeles = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
  }
`;
const Seattle = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const SanAntonia = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 7vw;
  color: #403f3f;
  input {
    height: 2vh;
    width: 2vw;
    background-color: #ababab;
  }
`;
const Filter = styled.div`
  padding-left: 8vw;
  font-size: 40px;
  color: #777474;
`;
const Kind = styled.h3`
  padding-top: 4vh;
  padding-bottom: 2vh;
  padding-left: 7vw;
`;
const Time = styled.h3`
  padding-left: 7vw;
  padding-top: 4vh;
  padding-bottom: 2vh;
`;
const Location = styled.h3`
  padding-left: 7vw;
  padding-top: 4vh;
  padding-bottom: 2vh;
`;
const LineOne = styled.div`
  border: 1px solid #efefef;
  margin-left: 7vw;
  margin-top: 2vh;
  height: 0vh;
  width: 8vw;
`;
const Linetwo = styled.div`
  border: 1px solid #efefef;
  margin-left: 7vw;
  margin-top: 2vh;
  height: 0vh;
  width: 8vw;
`;
const Right = styled.div`
  flex-direction: row;
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  height: 82vh;
  width: 100vw;
`;

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const { data } = useContext(MainDataContext);
  const [filteredData, setFilteredData] = useState(data)
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const userData = await query.docs[0].data();
      setName(userData.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");

    fetchUserName();
  }, [user, loading]);

  const handleFilterValues = (value) => {
 
    const data = filteredData?.filter((data) => data.title === value)
    setFilteredData(data)
  }

  return (
    <div>
      <Navbar>
        <LogOutButton onClick={logout}>LOG OUT</LogOutButton>
      </Navbar>
      <Whole>
        <Left>
          <Filter>Filter</Filter>
          <Kind>Kind of class</Kind>
          <Running>
            <input
              type="checkbox"
              value="Running"
              onClick={e => handleFilterValues(e.target.value)}
              
            />
            <h2>Running</h2>
          </Running>
          <Weight>
            <input type="checkbox" />
            <h2>Weigthing</h2>
          </Weight>
          <LineOne></LineOne>
          <Time>Time</Time>
          <Morning>
            <input type="checkbox" />
            <h2>Morning</h2>
          </Morning>
          <Afternoon>
            <input type="checkbox" />
            <h2>Afternoon</h2>
          </Afternoon>
          <Night>
            <input type="checkbox" />
            <h2>Night</h2>
          </Night>
          <Linetwo></Linetwo>
          <Location>Location</Location>
          <NewYork>
            <input type="checkbox" />
            <h2>New York</h2>
          </NewYork>
          <Chicago>
            <input type="checkbox" />
            <h2>Chicago</h2>
          </Chicago>
          <LosAngeles>
            <input type="checkbox" />
            <h2>Los Angeles</h2>
          </LosAngeles>
          <Seattle>
            <input type="checkbox" />
            <h2>Seattle</h2>
          </Seattle>
          <SanAntonia>
            <input type="checkbox" />
            <h2>San Antonia</h2>
          </SanAntonia>
        </Left>
        <Right>
          {filteredData?.map((data) => {
            return <Card cardData={data} />;
          })}
        </Right>
      </Whole>
    </div>
  );
}

export default Dashboard;
