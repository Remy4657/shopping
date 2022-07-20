import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Pages/Home/Home"
import ListProduct from "./Pages/Products/ListProduct"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register"
import Details from "./Pages/Detail/Details"
import Footer from "./Components/Footer"
import Cart from './Pages/Cart/Cart'
import Contact from "./Pages/Contact"
import About from "./Pages/about/About"
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";


function App() {
    const [cart, setCart] = useState([])
    const cartRedux = useSelector(state => state.shop.cart)

    // const [data, setData] = useState([])

    // async function fetchData(url) {
    //     // const response = await fetch(url);
    //     // var data = await response.json();
    //     fetch(url)
    //         .then(function (reponse) {
    //             return reponse.json()
    //         })
    //         .then(function (dataCourse) {
    //             console.log(dataCourse)
    //             setData(dataCourse)
    //         })
    // }
    // useEffect(() => {
    //     fetchData('http://localhost:3000/data')
    // }, [])
    const data = useSelector(state => state.shop.products)

    // const onAdd = (product) => {

    //     const exist = cart.find((x) => x.id === product.id)


    //     if (exist) {

    //         setCart(cart.map((val) =>
    //             val.id === product.id ? {...val, qty: val.qty + 1 } : val
    //         ))
    //     } else {
    //         setCart([...cart, {...product, qty: 1 }])

    //     }

    // }

    // const onRemove = (product) => {
    //     const exist = cart.find((x) => x.id === product.id)

    //     if (exist.qty === 1) {
    //         setCart(cart.filter((val) => val.id !== product.id))

    //     } else {
    //         setCart(
    //             cart.map((val) =>
    //                 val.id === product.id ? {...val, qty: val.qty - 1 } : val
    //             )
    //         )
    //     }
    // }
    // const onDelete = (product) => {
    //     setCart(cart.filter((val) => val.id !== product.id))
    // }


    return (
        <>
            <Header cart={cart} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={< ListProduct />} />
                <Route path="/contact" element={< Contact />} />
                <Route path="/about" element={< About />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
                <Route path="/product/:id" element={< Details />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App