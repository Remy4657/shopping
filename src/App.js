import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header.js";
import Home from "./Pages/Home/Home.js";
import ListProduct from "./Pages/Products/ListProduct.js";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register.js";
import Details from "./Pages/Detail/Details.js";
import Footer from "./Components/Footer.js";
import Cart from "./Pages/Cart/Cart.js";
import Contact from "./Pages/Contact.js";
import About from "./Pages/about/About.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchAllProduct } from "./redux/Shopping/action.js";
import NotFound from "./routes/NotFound.js";
import { ToastContainer } from "react-toastify";
import ShippingAddress from "./Components/ShippingAddress.js";
import PlaceOrderScreen from "./Components/PlaceOrderScreen.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchAllProduct());
  }, []);
  // comment
  return (
    <div className="d-flex flex-column site-container">
      <Header />
      <main>
        <Routes>
          <Route path="/product" element={<ListProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<ShippingAddress />}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
