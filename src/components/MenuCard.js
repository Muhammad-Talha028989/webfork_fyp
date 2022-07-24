import React from "react";
import useCartStore from "../store/cartStore/CartStore";
import axios from "axios";
import useCartPageStore from "../store/CartpageStore/CartPageStore";
import { useAuth0 } from "@auth0/auth0-react";
const MenuCard = ({ menuData }) => {
  const { getAccessTokenSilently, loginWithPopup, isAuthenticated } =
    useAuth0();
  // console.log(menuData)
  const addCarts = useCartStore((state) => state?.addCarts);
  const addCartPage = useCartPageStore((state) => state?.addCartPage);
  const addToCartStore = (payload) => [addCarts(payload)];
  const addToCartPageStore = (payload) => addCartPage(payload);

  const HandleCart = async (Cart) => {
    setTimeout(async () => {
      if (isAuthenticated) {
        let token = await getAccessTokenSilently({});
        addToCartStore(Cart);

        const data = await axios.post(
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
        );
        // data?.data?.forEach((element) => {
        //   addToCartPageStore(element);
        // });
        window.location.reload();
      } else {
        loginWithPopup();
      }
    }, 2000);
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
                    <a
                      href={() =>
                        isAuthenticated &&
                        `https://drive.google.com/u/0/uc?id=1PveLwbsppBvSx43kwKBtTJaPo2RoG57D&export=download`
                      }
                      target=""
                      rel={"noreferrer"}
                      onClick={(e) => HandleCart(curElem)}
                    >
                      Download Now
                    </a>
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
