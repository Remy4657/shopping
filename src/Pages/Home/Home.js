import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styled from "styled-components";
import Category from "./Category/Category.js";
import News from "./News";
import ListProduct from "./ListProduct.js";
import { useDispatch } from "react-redux";

function Home(props) {
  const ImageSlider = [
    {
      id: 1,
      img: "https://trankydesign.vn/wp-content/uploads/2021/02/thiet-ke-shop-quan-ao-nu.jpg",
    },
    {
      id: 2,
      img: "https://trankydesign.vn/wp-content/uploads/2021/02/thiet-ke-noi-that-cua-hang-thoi-trang-nu.jpg",
    },
    {
      id: 3,
      img: "https://trankydesign.vn/wp-content/uploads/2021/02/thiet-ke-shop-quan-ao-nam.jpg",
    },
    {
      id: 4,
      img: "https://trankydesign.vn/wp-content/uploads/2021/02/thiet-ke-noi-that-cua-hang-thoi-trang-nam-1536x1152.jpg",
    },
  ];

  /* css start */
  const Box = styled.div`
    margin: 0 auto;
    position: relative;
    height: 91.5vh;
  `;
  const Dot = styled.div`
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    bottom: 1rem;
    display: flex;
  `;
  const Dotitem = styled.div`
    border-radius: 50%;
    background-color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    opacity: 0.7;
  `;

  /* css end */

  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex(() =>
      imageIndex < ImageSlider.length - 1 ? imageIndex + 1 : 0
    );
  };
  const prevSlide = () => {
    setImageIndex(() =>
      imageIndex > 0 ? imageIndex - 1 : ImageSlider.length - 1
    );
  };
  const dotSmooth = (index) => {
    setImageIndex(index);
  };

  const dispatch = useDispatch();

  return (
    <div id="home">
      {ImageSlider.map((val, index) => (
        <Box
          key={val.id}
          className={imageIndex !== index ? "hide" : null}
          id="home-box"
        >
          <img src={val.img} alt="anh phong canh" />

          <AiOutlineRight className="icon icon-right" onClick={nextSlide} />
          <AiOutlineLeft className="icon icon-left" onClick={prevSlide} />

          <Dot>
            {Array.from({ length: 4 }).map((item, index) => (
              <Dotitem
                key={index}
                className={index === imageIndex ? "dot-active" : null}
                onClick={() => dotSmooth(index)}
              ></Dotitem>
            ))}
          </Dot>
        </Box>
      ))}

      <div>
        <Category />
        <ListProduct />
        <News />
      </div>
    </div>
  );
}
export default Home;
