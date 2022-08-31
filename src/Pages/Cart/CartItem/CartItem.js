import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../Cart.module.css";
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  DELETE_FROM_CART,
} from "../../../redux/Shopping/action";

function CartItem(props) {
  const { product } = props;
  const Cartproduct = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 2rem;
    position: relative;
  `;
  const dispatch = useDispatch();

  return (
    <Cartproduct key={product.id} id="Cartproduct-padding">
      <div className={styles.div_Productimg}>
        <img className={styles.img} src={product.img} alt="" />
      </div>

      <div className={styles.div_Productfooter} id="cart-item">
        <h4>{product.title}</h4>

        <p>{product.desc}</p>

        <div className={styles.div_Control}>
          <button
            className={styles.span}
            disabled={product.quantity === 1}
            onClick={() => dispatch(decrease(product.id))}
          >
            -
          </button>
          <span style={{ margin: "0 2rem", lineHeight: "100%" }}>
            {product.quantity}
          </span>
          <button
            className={styles.span}
            disabled={product.quantity === product.countStock}
            onClick={() => dispatch(increase(product.id))}
          >
            +
          </button>
        </div>

        <p>
          Price: <span>{product.price * product.quantity}</span>
        </p>
      </div>

      <AiOutlineClose
        className="cart-icon-close"
        onClick={() => {
          //onDelete(product)
          dispatch(DELETE_FROM_CART(product.id));
        }}
      />
    </Cartproduct>
  );
}

export default CartItem;
