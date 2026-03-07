import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  // We start auth as false so that on "first entry" or refresh, 
  // the user is not automatically logged in.
  const [auth, setAuth] = useState(false);

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;