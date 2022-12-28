import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Shopping/action.js";
import { useSelector } from "react-redux";
import "./Product.scss";
import axios from "axios";
import { toast } from "react-toastify";
import Rating from "../../Components/Rating.js";

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
  //console.log("cart: ", cart);

  const handleAddTocard = async () => {
    const existItem = cart.find((x) => x.id == product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `https://api-shopping-15mm.vercel.app/product/${product.id}`
    );

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    } else {
      console.log("data: ", data);
      console.log("count stock: ", data.countInstock, "quantity: ", quantity);
      toast.success("Add a product successfuly. Please check cart!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(addToCart(props.product, quantity));
    }
  };

  return (
    <div className="product" id="product-flex-column">
      <div className="product-img">
        <Link to={`/product/${props.id}`}>
          <img id="zoom" src={props.image} alt="" />
        </Link>
      </div>
      <div className="product-footer">
        <Link to={`/product/${props.id}`}>
          <h4>{props.title}</h4>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <p>
          Price: <span>${product.price}</span>
        </p>
        <p>{props.desc}</p>
        <button
          onClick={() =>
            //props.onAdd(props.product)
            handleAddTocard()
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
