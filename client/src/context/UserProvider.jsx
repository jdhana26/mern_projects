import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  // Authentication state with localStorage persistence
  const [auth, setAuth] = useState(() => {
    try {
      const active = localStorage.getItem("isActive");
      if (!active) return false;
      const parsed = JSON.parse(active);
      return !!parsed?.auth;
    } catch (e) {
      console.error("Auth initialization error:", e);
      return false;
    }
  });

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <UserContext.Provider value={{ auth, setAuth, searchTerm, setSearchTerm }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;