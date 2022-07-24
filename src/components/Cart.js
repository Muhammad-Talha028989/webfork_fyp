import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import useCartState from "../store/cartStore/CartStore";
import { useAuth0 } from "@auth0/auth0-react";
// import Rating from "./Rating";
import "../styles/Cart.css";

import axios from "axios";

const Cart = () => {
  const { getAccessTokenSilently } = useAuth0();
  const CartState = useCartState((state) => state.CartState);
  const removeCart = useCartState((state) => state.removeCart);
  const [cart, setCart] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setCart(CartState);
    setTotal(
      CartState?.reduce(
        (acc, curr) => acc + Number(curr?.price) * curr?.qty,
        0,
      ),
    );
  }, [CartState, getAccessTokenSilently]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart?.map((prod, index) => (
            <ListGroup.Item key={index}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>{/* <Rating rating={prod.ratings} /> */}</Col>
                <Col md={2}>
                  {/* <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) => e}
                  >
                     {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))} 
                  </Form.Control> */}
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => {
                      removeCart(prod);
                    }}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart?.length}) items</span>
        <span
          style={{ fontWeight: 700, fontSize: 20 }}
        >{` Total: ₹ ${total}`}</span>
        <Button type="button" disabled={cart?.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
