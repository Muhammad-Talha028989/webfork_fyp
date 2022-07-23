import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from "./components/Blogs";
import HomePage from "./components/home/homepage";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";

function App() {
  // const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  // useEffect(() => {
  //   const token = isAuthenticated ? getAccessTokenSilently() : null;
  //   const getResponse = async () => {
  //     try {
  //       await axios
  //         .get("/", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         })
  //         .then((response) => console.log(response?.data))
  //         .catch((error) => console.log(error));
  //       const requires = await axios.post("/", {
  //         data: {
  //           user,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   isAuthenticated && getResponse().catch((e) => console.log(e));
  // }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <BrowserRouter>
    <PreNavbar />
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
