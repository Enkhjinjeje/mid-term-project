import { useEffect, useState } from "react";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "../firebase";
import styled from "styled-components";
import { MainDataContext } from "../context/test-context";
import { Card } from "./Card";
import { useContext } from "react";
import TrashIcon from "../images/icons8-trash-40.png";
import PlusIcon from "../images/icons8-plus-48.png";
import {
  Whole,
  Navbar,
  AdminEdit,
  DeleteClass,
  TrashImage,
  AddClass,
  PlusImage,
  LogOutButton,
  Left,
  Running,
  Weight,
  Swimming,
  Cycling,
  Morning,
  Afternoon,
  Night,
  NewYork,
  Chicago,
  LosAngeles,
  Seattle,
  SanAntonia,
  Filter,
  Kind,
  Time,
  Location,
  LineOne,
  Linetwo,
  Right,
} from "./DashboardStyle";
import Checkbox from "@mui/material/Checkbox";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const { data: dummyData } = useContext(MainDataContext);
  const [filteredData, setFilteredData] = useState(dummyData);
  const [admin, setAdmin] = useState("");
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const userData = await query.docs[0].data();
      setAdmin(userData.admin);
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

  const handleFilterClassValues = (e) => {
    if (e.target.checked === false) {
      setFilteredData(dummyData);
    } else {
      if (e.target.name === "run") {
        const data = filteredData?.filter((data) => data.filterClass === "run");
        setFilteredData(data);
      }
      if (e.target.name === "weight") {
        const data = filteredData?.filter(
          (data) => data.filterClass === "weight"
        );
        setFilteredData(data);
      }
      if (e.target.name === "swim") {
        const data = filteredData?.filter(
          (data) => data.filterClass === "swim"
        );
        setFilteredData(data);
      }
      if (e.target.name === "cycle") {
        const data = filteredData?.filter(
          (data) => data.filterClass === "cycle"
        );
        setFilteredData(data);
      }
    }
  };

  const handleFilterTimeValues = (value) => {
    const data = filteredData?.filter((data) => data.filterTime === value);
    setFilteredData(data);
  };
  const handleFilterLocationValues = (value) => {
    const data = filteredData?.filter((data) => data.filterClass === value);
    setFilteredData(data);
  };

  return (
    <div>
      <Navbar>
        <LogOutButton onClick={logout}>LOG OUT</LogOutButton>
      </Navbar>
      {admin ? (
        <AdminEdit>
          <DeleteClass>
            <TrashImage src={TrashIcon} />
            <p>Remove Class</p>
          </DeleteClass>
          <AddClass>
            <PlusImage src={PlusIcon} />
            <p>Add New Class</p>
          </AddClass>
        </AdminEdit>
      ) : (
        <div></div>
      )}
      <Whole>
        <Left>
          <Filter>Filter</Filter>
          <Kind>Kind of class</Kind>
          <Running>
            <input
              type="checkbox"
              value="run"
              name="run"
              onChange={(e) => handleFilterClassValues(e)}
            />

            <h2>Running</h2>
          </Running>
          <Weight>
            <input
              type="checkbox"
              value="weight"
              name="weight"
              onClick={(e) => handleFilterClassValues(e)}
            />
            <h2>Weigthing</h2>
          </Weight>
          <Swimming>
            <input
              type="checkbox"
              value="swim"
              name="swim"
              onClick={(e) => handleFilterClassValues(e)}
            />
            <h2>Swimming</h2>
          </Swimming>
          <Cycling>
            <input
              type="checkbox"
              value="cycle"
              name="cycle"
              onClick={(e) => handleFilterClassValues(e)}
            />
            <h2>Cycling</h2>
          </Cycling>
          <LineOne></LineOne>
          <Time>Time</Time>
          <Morning>
            <input
              type="checkbox"
              value="morning"
              onClick={(e) => handleFilterTimeValues(e.target.value)}
            />
            <h2>Morning</h2>
          </Morning>
          <Afternoon>
            <input
              type="checkbox"
              value="afternoon"
              onClick={(e) => handleFilterTimeValues(e.target.value)}
            />
            <h2>Afternoon</h2>
          </Afternoon>
          <Night>
            <input
              type="checkbox"
              value="night"
              onClick={(e) => handleFilterTimeValues(e.target.value)}
            />
            <h2>Night</h2>
          </Night>
          <Linetwo></Linetwo>
          <Location>Location</Location>
          <NewYork>
            <input
              type="checkbox"
              value="newyork"
              onClick={(e) => handleFilterLocationValues(e.target.value)}
            />
            <h2>New York</h2>
          </NewYork>
          <Chicago>
            <input
              type="checkbox"
              value="chigaco"
              onClick={(e) => handleFilterLocationValues(e.target.value)}
            />
            <h2>Chicago</h2>
          </Chicago>
          <LosAngeles>
            <input
              type="checkbox"
              value="losangeles"
              onClick={(e) => handleFilterLocationValues(e.target.value)}
            />
            <h2>Los Angeles</h2>
          </LosAngeles>
          <Seattle>
            <input
              type="checkbox"
              value="seattle"
              onClick={(e) => handleFilterLocationValues(e.target.value)}
            />
            <h2>Seattle</h2>
          </Seattle>
          <SanAntonia>
            <input
              type="checkbox"
              value="sanantonia"
              onClick={(e) => handleFilterLocationValues(e.target.value)}
            />
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
