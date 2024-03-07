import { createContext } from "react";
import React from "react";
const UserContext = createContext({
  loggedinUser: "DefaultUser",
  jaihouser: "Gaurav",
});

export default UserContext;
