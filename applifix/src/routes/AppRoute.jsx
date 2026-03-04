import { Route, Routes } from "react-router-dom";
import Layout from "../outlet/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import Cards from "../components/Cards";
import Home from "../Home";
import UserProvider from "../context/UserProvider";

const AppRoute = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </UserProvider>



  );
};

export default AppRoute;