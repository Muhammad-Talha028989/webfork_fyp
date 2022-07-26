import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import useCartState from "../store/cartStore/CartStore";
import { useAuth0 } from "@auth0/auth0-react";
import useCartPageStore from "../store/CartpageStore/CartPageStore";

// import Rating from "./Rating";
import "../styles/Cart.css";

<<<<<<< HEAD
=======
import axios from "axios";

>>>>>>> a38e6fac162bfbdba4f51b85a88d1f06106f8a1b
const Cart = () => {
  const { getAccessTokenSilently } = useAuth0();
  const CartState = useCartState((state) => state?.CartState);
  const removeCart = useCartState((state) => state?.removeCart);
  const [cart, setCart] = useState();
  const [total, setTotal] = useState();
  const CartPageStoreObjects = useCartPageStore(
    (state) => state?.CartPageStoreObject,
  );
  const addCartPage = useCartPageStore((state) => state?.addCartPage);
  const removeCartPage = useCartPageStore((state) => state?.removeCartPage);
  useEffect(() => {
    setCart(CartPageStoreObjects);
    setTotal(
      CartPageStoreObjects?.reduce(
        (acc, curr) => acc + Number(curr?.Cart?.price) * curr?.Cart?.qty,
        0,
      ),
    );
  }, [CartPageStoreObjects]);

  return (
    <div className="main">
        <div className="home">
      <div className="productContainer">
        <ListGroup>
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
              <Row>
                <Col md={2}>
                  <Image src={Cart?.image} alt={Cart?.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{Cart?.name}</span>
                </Col>
                <Col md={2}>₹ {Cart?.price}</Col>
                <Col md={2}>{/* <Rating rating={Cart.ratings} /> */}</Col>
                <Col md={2}>
                  {/* <Form.Control
                    as="select"
                    value={Cart.qty}
                    onChange={(e) => e}
                  >
                     {[...Array(Cart.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))} 
                  </Form.Control> */}
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
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
          Subtotal ({CartPageStoreObjects?.length}) items
        </span>
        <span
          style={{ fontWeight: 700, fontSize: 20 }}
        >{` Total: ₹ ${total}`}</span>
        <Button type="button" disabled={CartPageStoreObjects?.length === 0}>
>>>>>>> a38e6fac162bfbdba4f51b85a88d1f06106f8a1b
          Proceed to Checkout
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
