import React from "react";
import styled from "styled-components";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem.js";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Cart(props) {
  const Payment = styled.div`
    flex: 3;
    border: solid 1px #ccc;
    margin-left: 4rem;
    padding: 2rem;
    border-radius: 1rem;
    height: fit-content;
  `;
  const cart = useSelector((state) => state.shop.cart);

  function getSum(total, num) {
    return total + num.price * num.quantity;
  }
  //const Subtotal = props.cart.reduce(getSum, 0)
  const Subtotal = cart.reduce(getSum, 0);
  const shipFee = Subtotal * 0.1;
  const discountShip = shipFee * -0.2;
  const total = Subtotal + shipFee + discountShip;

  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div className="cart">
      <div className="content-product">
        <h1 style={{ textAlign: "center", margin: "2rem 0 6rem 0" }}>Cart/</h1>

        {cart.length === 0 && (
          <div style={{ textAlign: "center" }}>
            Cart is empty. <Link to="/product">Go Shopping</Link>
          </div>
        )}

        {cart.length > 0 && (
          <div className="content-product-pay">
            <div className={styles.div_Listproduct}>
              {cart.map((val, index) => (
                <CartItem key={index} product={val} />
              ))}
            </div>

            <Payment className="payment">
              <h2>ORDER SUMMARY</h2>
              <div>
                <p>Subtotal:</p>
                <span>${Subtotal}</span>
              </div>
              <div>
                <p>Estimated Shipping:</p>
                <span>${shipFee.toFixed()}</span>
              </div>
              <div>
                <p>Shipping Discount:</p>
                <span>${discountShip.toFixed()}</span>
              </div>
              <div>
                <h3>Total:</h3>
                <span>${total.toFixed()}</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={() => {
                  handlePayment();
                }}
              >
                Payment
              </button>
            </Payment>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
