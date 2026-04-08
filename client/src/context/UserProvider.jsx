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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  return (
    <UserContext.Provider value={{ auth, setAuth, searchTerm, setSearchTerm, isModalOpen, setIsModalOpen, modalProduct, setModalProduct }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;