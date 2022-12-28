import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutStep.js";
import "./PlaceOrderScreen.scss";
import { toast } from "react-toastify";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.shop.cart);
  const shippingAddress = useSelector((state) => state.shop.shippingAddress);
  const Subtotal = cart.reduce(getSum, 0);
  const shipFee = Subtotal * 0.1;
  const discountShip = shipFee * -0.2;
  const total = Subtotal + shipFee + discountShip;

  function getSum(total, num) {
    return total + num.price * num.quantity;
  }
  const placeOrderHandler = () => {
    toast.success("Oder Successful", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <title>Preview Order</title>
      <Row className="px-5 mx-3">
        <h1 className="my-3">Preview Order</h1>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {shippingAddress.fullName} <br />
                <strong>Address: </strong> {shippingAddress.address},
                {shippingAddress.city}, {shippingAddress.postalCode},
                {shippingAddress.country}
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item key={item.id} className="h-100px">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{" "}
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${Subtotal.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${shipFee.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping Discount</Col>
                    <Col>${discountShip.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>${total.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      onClick={placeOrderHandler}
                      disabled={cart.length === 0}
                    >
                      Order
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrderScreen;
