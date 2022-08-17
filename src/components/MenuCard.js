import React, { useState, useRef } from "react";
import axios from "axios";
import useCartPageStore from "../store/CartpageStore/CartPageStore";
import { useAuth0 } from "@auth0/auth0-react";
const MenuCard = ({ menuData }) => {
  const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } =
    useAuth0();
  // console.log(menuData)
  const [data, setData] = useState();
  const addCartPage = useCartPageStore((state) => state?.addCartPage);
  const CartPageStoreObject = useCartPageStore(
    (state) => state?.CartPageStoreObject,
  );
  const addToCartPageStore = (payload) => addCartPage(payload);

  const HandleCart = async (Cart) => {
    let token = await getAccessTokenSilently();
    // if (CartPageStoreObject.length === 0) await addToCartPageStore();
    await axios
      .post(
        "/cart",
        {
          data: {
            Cart,
          },
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => setData(res?.data));

    // data?.data?.forEach((element) => {
    //   addToCartPageStore(element);
    // });
  };
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem, index) => {
          return (
            <>
              <div className="card-container" key={index}>
                <div className="card-Menu">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    <span className="card-author subtle">{curElem.name}</span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-descripion subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={curElem.image}
                    alt="card-images"
                    className="card-media"
                  />

                  <span className="card-tag subtle">
                    <button
                      type={"button"}
                      onClick={() =>
                        isAuthenticated
                          ? HandleCart(curElem).catch((e) => console.error(e))
                          : null
                      }
                    >
                      Add Cart
                    </button>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
