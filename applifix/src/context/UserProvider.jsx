import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = JSON.parse(localStorage.getItem("isActive"));
    return storedAuth ? !!storedAuth.auth : false;
  });

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;