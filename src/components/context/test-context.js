import React from "react";
import { dummyData } from "./dummyData";
import { useContext } from "react";

export const MainDataContext = React.createContext();

export const MainDataProvider = (props) => {
  const { children } = props;
  const data = dummyData;

  const user = { name: "elbeg", email: "elber@nestsolutions.llc", admin: true};

  const isAdmin = (user) => {
    if (user.admin === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <MainDataContext.Provider value={{ data, isAdmin }}>
      {children}
    </MainDataContext.Provider>
  );
};

export const useDataProvider = () => useContext(MainDataContext);
