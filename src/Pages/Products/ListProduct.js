import React, { useEffect, useRef } from "react";
import Product from "./Product.js";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { debounce } from "lodash";
import _ from "lodash";
import LoadingBox from "../../Components/LoadingBox.js";

function ListProduct() {
  const H1 = Styled.h1`
        text-align: center;
        margin: 10rem auto;
        opacity: 0.7;
        border-bottom: 2px solid #000;
        width: fit-content;
    `;
  let data = useSelector((state) => state.shop.listProducts);

  const [listProduct, setListProduct] = useState(data);
  const isLoading = useSelector((state) => state.shop.isLoading);

  const handleSearchProduct = debounce((e) => {
    //setKeywordSearch(e.target.value)
    let keyword = e.target.value;

    if (keyword) {
      let cloneProduct = data;

      cloneProduct = data.filter((item) =>
        item.title.includes(keyword.toUpperCase())
      );
      console.log("clone product:", cloneProduct);
      setListProduct(cloneProduct);
    } else {
      setListProduct(data);
    }
  }, 400);

  const handleSort = (sortBy) => {
    let listProductClone = _.cloneDeep(listProduct);

    if (sortBy === "desc") {
      listProductClone.sort((a, b) => b.price - a.price);
      setListProduct(listProductClone);
    }
    if (sortBy === "asc") {
      listProductClone.sort((a, b) => a.price - b.price);
      setListProduct(listProductClone);
    }
    //listUsersClone = _.orderBy(listUsersClone, sortField, sortBy)
  };

  return (
    <div className="content-product">
      <H1>PRODUCT</H1>
      <div className="product-title">
        <input
          placeholder="Search product"
          type="text"
          onChange={(e) => handleSearchProduct(e)}
        />
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Sắp xếp theo giá
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleSort("asc")}>Từ thấp đến cao</li>
            <li onClick={() => handleSort("desc")}>Từ cao đến thấp</li>
          </ul>
        </div>
      </div>
      <div className="list-product">
        {isLoading ? (
          <LoadingBox />
        ) : (
          listProduct.map((val, index) => (
            <Product
              key={index}
              id={val.id}
              image={val.img}
              title={val.title}
              price={val.price}
              product={val}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default ListProduct;
