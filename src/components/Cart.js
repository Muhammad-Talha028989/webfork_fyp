import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import useCartState from "../store/cartStore/CartStore";
// import Rating from "./Rating";
import "../styles/Cart.css";

const Cart = () => {
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
  }, [CartState, cart]);

  return (
    <div className="main">
        <div className="home">
      <div className="productContainer">
        <ListGroup>
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
        <span className="cart-subtotal">Subtotal ({cart?.length})items</span> <br />
        <span className="cart-total">{` Total: Rs ${total}`}</span> <br />
        <Button type="button" className="cart-totalbtn" disabled={cart?.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
