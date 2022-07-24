import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from "./components/Blogs";
import HomePage from "./components/home/homepage";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "./components/Cart";
import useCartPageStore from "./store/CartpageStore/CartPageStore";

function App() {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const addCartPage = useCartPageStore((state) => state?.addCartPage);
  const CartPageStoreObject = useCartPageStore(
    (state) => state?.CartPageStoreObject,
  );
  useEffect(() => {
    const addToCartPageStore = (payload) => addCartPage(payload);
    const getResponse = async () => {
      const token = isAuthenticated && (await getAccessTokenSilently());
      try {
        let response = await axios.post(
          "/",
          {
            data: {
              user,
            },
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );

        response?.data?.forEach((element) => {
          addToCartPageStore(element);
        });
      } catch (error) {
        console.log(error);
      }
    };

    isAuthenticated && getResponse().catch((e) => console.log(e));
  }, [addCartPage, getAccessTokenSilently, isAuthenticated, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
