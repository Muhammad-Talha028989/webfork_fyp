import { useEffect, useState, useMemo, useRef } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import useCartPageStore from "../store/CartpageStore/CartPageStore";
import shallow from "zustand/shallow";

// import Rating from "./Rating";
import "../styles/Cart.css";

<<<<<<< HEAD
=======
import axios from "axios";

>>>>>>> a38e6fac162bfbdba4f51b85a88d1f06106f8a1b
const Cart = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const CartPageStoreObjects = useCartPageStore(
    (state) => state?.CartPageStoreObject,
  );
  const addCartPage = useCartPageStore((state) => state?.addCartPage);
  const removeCartPage = useCartPageStore((state) => state?.removeCartPage);
  const countCartItem = useCartPageStore((state) => state?.countCartItem);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    (preState) => {
      // setCart(CartPageStoreObjects);
      const getdata = async () => {
        let token = await getAccessTokenSilently();

        let response = await axios
          .get("/cart", {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setCart(response?.data))
          .catch((e) => console.error(e));
        setTotal(() =>
          cart?.reduce(
            (acc, curr) => acc + Number(curr?.Cart?.price) * curr?.Cart?.qty,
            0,
          ),
        );
      };
      getdata();
      // countCartItem(cart?.length);
    },
    [cart, getAccessTokenSilently],
  );

  const handleCartDelete = async (Cart) => {
    let token = await getAccessTokenSilently();

    await axios
      .post(
        "/delete",
        {
          data: {
            Cart,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) =>
        (response?.data
          ? (removeCartPage(Cart), window?.location?.reload())
          : null
        )?.catch((e) => console.error(e)),
      )
      .catch((e) => e);
    // await addCartPage(updateResponse);
  };

  return (
    <div className="main">
        <div className="home">
      <div className="productContainer">
        <ListGroup>
<<<<<<< Updated upstream
<<<<<<< HEAD
          {cart?.map((prod) => ( 
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col>
                  <Image src={prod.image} alt={prod.name} className="cart-image" />
                </Col>
                <Col>
                  <span className="cart-span">{prod.name}</span>
                </Col>
                <Col className="cart-price">Rs {prod.price}</Col>
                <Col>{/* <Rating rating={prod.ratings} /> */}</Col>
                <Col>
                </Col>
                <Col>
                  <Button 
                    type="button" 
                    className="cart-btn"
                    onClick={() => {
                      removeCart(prod);
=======
          {CartPageStoreObjects?.map(({ Cart }, index) => (
            <ListGroup.Item key={index}>
=======
          {cart?.map((Cart, index) => (
            <ListGroup.Item key={Cart?.Cart?.id + index}>
>>>>>>> Stashed changes
              <Row>
                <Col md={2}>
                  <Image
                    src={Cart?.Cart?.image}
                    alt={Cart?.Cart?.name}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{Cart?.Cart?.name}</span>
                </Col>
                <Col md={2}>₹ {Cart?.Cart?.price}</Col>
                <Col md={2}>{/* <Rating rating={Cart?.Cart.ratings} /> */}</Col>
                <Col md={2}>
                  {/* <Form.Control
                    as="select"
                    value={Cart?.Cart.qty}
                    onChange={(e) => e}
                  >
                     {[...Array(Cart?.Cart.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))} 
                  </Form.Control> */}
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
<<<<<<< Updated upstream
                    onClick={async () => {
                      removeCartPage(Cart);
                      let token = await getAccessTokenSilently();

                      let updateResponse = axios.post(
                        "/delete",
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

>>>>>>> a38e6fac162bfbdba4f51b85a88d1f06106f8a1b
                    }}
=======
                    onClick={() =>
                      handleCartDelete(Cart?.Cart).catch((e) =>
                        console.error(e),
                      )
                    }
>>>>>>> Stashed changes
                  >
                    <AiFillDelete/>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div className="filters summary">
<<<<<<< HEAD
        <span className="cart-subtotal">Subtotal ({cart?.length})items</span> <br />
        <span className="cart-total">{` Total: Rs ${total}`}</span> <br />
        <Button type="button" className="cart-totalbtn" disabled={cart?.length === 0}>
=======
        <span className="title">
          Subtotal ({isAuthenticated ? cart?.length : 0}) items
        </span>
<<<<<<< Updated upstream
        <span
          style={{ fontWeight: 700, fontSize: 20 }}
        >{` Total: ₹ ${total}`}</span>
        <Button type="button" disabled={CartPageStoreObjects?.length === 0}>
>>>>>>> a38e6fac162bfbdba4f51b85a88d1f06106f8a1b
=======
        <span style={{ fontWeight: 700, fontSize: 20 }}>{` Total: ₹ ${
          isAuthenticated ? (typeof total === "undefined" ? 0 : total) : 0
        }`}</span>
        <Button type="button" disabled={cart?.length === 0}>
>>>>>>> Stashed changes
          Proceed to Checkout
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
