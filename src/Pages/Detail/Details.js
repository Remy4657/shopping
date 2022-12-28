import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Products/Product.js";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.scss";
import axios from "axios";
import { PRODUCT_SUCCESS } from "../../redux/Shopping/action.js";

function Details(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.shop.product);
  console.log("id: ", id);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "PRODUCT_REQUEST" });
      try {
        //const result = await fetchProduct(id);
        const result = await axios.get(
          `https://api-shopping-15mm.vercel.app/product/${id}`
        );
        console.log("result: ", result);

        dispatch(PRODUCT_SUCCESS(result.data));
      } catch (err) {
        dispatch({ type: "PRODUCT_ERROR", payload: err.message });
      }
    };
    fetchData();
  }, [id]);

  // const productFind = data.find((val) => {
  //   return val.id == id;
  // });

  return (
    <div className="content-product">
      <h1 style={{ textAlign: "center", margin: "2rem 0 6rem 0" }}>Details/</h1>
      <div className="list-product product-detail">
        <Product
          className="product-detail-item"
          id={product.id}
          image={product.img}
          title={product.title}
          price={product.price}
          desc={product.desc}
          product={product}
        />
      </div>
    </div>
  );
}

export default Details;
