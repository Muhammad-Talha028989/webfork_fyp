import React from "react";
import useCartStore from "../store/cartStore/CartStore";
const MenuCard = ({ menuData }) => {
  // console.log(menuData)
  const addCarts = useCartStore((state) => state.addCarts);
  const addToCartStore = (payload) => [addCarts(payload)];
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
                      href={`https://drive.google.com/u/0/uc?id=1PveLwbsppBvSx43kwKBtTJaPo2RoG57D&export=download`}
                      target="_blank"
                      rel={"noreferrer"}
                      onClick={(e) => addToCartStore(curElem)}
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
