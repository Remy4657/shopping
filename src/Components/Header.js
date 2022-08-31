import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { USER_LOGOUT } from "../redux/Shopping/action.js";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
  const inforUser = useSelector((state) => state.shop.inforUser);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleToggleMenu = () => {
    setToggle(!toggle);
  };
  const handleToggleClose = () => {
    setToggle(false);
  };

  const signoutHandler = () => {
    dispatch(USER_LOGOUT());
    localStorage.removeItem("inforUser");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("cartItems");
    //navigate("/");
  };
  return (
    <header className="py-3">
      <AiOutlineMenu className="icon-menu" onClick={handleToggleMenu} />
      <h1>NIKE</h1>

      <ul className="header-nav" id={toggle ? "toggle" : null}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>

        <li>
          <AiOutlineClose className="icon-close" onClick={handleToggleClose} />
        </li>
      </ul>

      <div className="header-cart d-flex">
        <div className="mr-3">
          {inforUser ? (
            <NavDropdown
              title={inforUser.name}
              id="basic-nav-dropdown"
              className="signin"
            >
              <LinkContainer to="/profile">
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/orderhistory">
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="/signin"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
          {/* <Link to="/register">REGISTER</Link> */}
        </div>
        <div className="mx-3">
          <Link to="/cart">
            <FaShoppingCart className="icon-cart" />
            <sup>{cart.length}</sup>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
