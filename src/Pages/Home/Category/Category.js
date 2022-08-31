import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

function Category() {
  const Wrapper = Styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 2rem;
        padding: 0 5rem;
    `;
  const Box = Styled.div`
        position: relative;
    `;
  const Buy = Styled.div`
        position: absolute;
        padding: 1rem 2rem;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        background-color: pink;
        
    `;

  return (
    <div>
      <h1 className={styles.h1}>CATEGORY</h1>
      <div className={styles.wrapper}>
        <Box className="category-product">
          <img
            src="https://vinatex.com.vn/wp-content/uploads/2020/03/elle-vie%CC%A3%CC%82t-nam-thoi-trang-angela-baby-13-1024x1435-4-820x1024.jpg"
            alt=""
          />
          <Buy className="category-btn">
            <h3>SUMMER -30%</h3>
            <Link to="./product">
              <button className={styles.button}>Mua ngay</button>
            </Link>
          </Buy>
        </Box>
        <Box className="category-product">
          <img
            src="https://aothudong.com/upload/product/atd-188/ao-thun-nam-dai-tay-trang-cuc-chat-0.jpg"
            alt=""
          />
          <Buy className="category-btn">
            <h3>SPRING -50%</h3>
            <Link to="./product">
              <button className={styles.button}>Mua ngay</button>
            </Link>
          </Buy>
        </Box>
        <Box className="category-product">
          <img
            src="https://i.pinimg.com/736x/71/fb/19/71fb194580e73f8917dd54e73ec5927f.jpg"
            alt=""
          />
          <Buy className="category-btn">
            <h3>WINTER -20%</h3>
            <Link to="./product">
              <button className={styles.button}>Mua ngay</button>
            </Link>
          </Buy>
        </Box>
      </div>
    </div>
  );
}

export default Category;
