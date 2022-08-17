import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PreNavbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import useCartPageStore from "../store/CartpageStore/CartPageStore";
import shallow from "zustand/shallow";

const cartIcon = (
  <svg
    className="temp"
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 0 24 24"
    width="20px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const PreNavbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, getAccessTokenSilently } =
    useAuth0();
  const CartPageStoreObjects = useCartPageStore(
    (state) => state.CartPageStoreObject,
    shallow,
  );
  const [arrayCart, setArrayCart] = useState([]);
  const getDataFromDatabase = async () => {
    let token = await getAccessTokenSilently();
    return await axios.get("/cart/data", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <div className="preNav">
      <div>
        <a href="/#">WebFork</a> <span>|</span>
        <a href="/#">GET Latest Update</a> <span>|</span>
        <a href="#contact">ONLINE HELP</a> <span>|</span>
        <a href="#categories">Check Tamplates ﹀</a>
      </div>
      <div>
        {/* <a  href="/#">SIGN IN</a> <span>|</span> */}
        <Link
          to="/login"
          onClick={() => (isAuthenticated ? logout({}) : loginWithRedirect())}
        >
          {isAuthenticated ? "LOGOUT" : "SiGN UP"}
        </Link>
        <span>|</span>
        <Link to="/cart">
          {cartIcon} CART (
          {isAuthenticated
            ? typeof CartPageStoreObjects === "undefined"
              ? 0
              : CartPageStoreObjects?.length
            : 0}
          )
        </Link>
      </div>
    </div>
  );
};

export default PreNavbar;
