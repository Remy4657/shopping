import React from "react";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import styled from "styled-components";
import "./Footer.scss";

function Footer() {
  const Li = styled.li`
    display: flex;
    flex-dicorection: row;
    align-items: center;
  `;
  const P = styled.p`
    margin-left: 1rem;
  `;
  const Social = styled.div`
    font-size: 3rem;
    margin-top: 2rem;
  `;
  const A = styled.a`
    margin-right: 1rem;
  `;

  return (
    <div className="footer">
      <div>
        <h1>NIKE</h1>
        <p>
          Nike là thương hiệu thời trang giày dép phụ kiện thể thao được thành
          lập năm 1964 và trở thành thương hiệu thể thao nổi tiếng hàng đầu thế
          giới.
        </p>
        <Social>
          <A className="social-icon" href="#" target="_blank">
            <BsFacebook />
          </A>
          <A className="social-icon" href="#" target="_blank">
            <AiFillTwitterCircle />
          </A>
          <A className="social-icon" href="#" target="_blank">
            <AiFillYoutube />
          </A>
        </Social>
      </div>
      <div>
        <h2>Links</h2>
        <div className="links">
          <ul>
            <li>Trang chủ</li>
            <li>Dịch vụ</li>
            <li>Tin tức và sự kiện</li>
            <li>Đồ nam</li>
            <li>Quảng cáo</li>
          </ul>
          <ul>
            <li>Giỏ hàng</li>
            <li>Đồ nữ</li>
            <li>Thanh toán</li>
            <li>tài khoản của tôi</li>
            <li>Địa chỉ</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Contact</h2>
        <ul>
          <Li>
            <FaLocationArrow className="icon" />
            <P> 298, Bắc Từ Liêm, HN</P>
          </Li>
          <Li>
            <AiFillPhone className="icon" />
            <P> +0765.768.980</P>
          </Li>
          <Li>
            <AiOutlineMail className="icon" />
            <P> contact@gmail.com</P>
          </Li>
          <Li>
            <RiAccountCircleFill className="icon" />
            <P> Account</P>
          </Li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
