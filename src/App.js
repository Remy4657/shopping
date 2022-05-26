import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Pages/Home/Home"
import ListProduct from "./Pages/ListProduct"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register"
import Details from "./Pages/Details"
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

    const onAdd = (product) => {

        const exist = cart.find((x) => x.id === product.id)


        if (exist) {
            
            setCart(cart.map((val) =>
                val.id === product.id ? {...val, qty: val.qty + 1 } : val
            ))
        } else {
            setCart([...cart, {...product, qty: 1 }])

        }

    }

    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id)

        if (exist.qty === 1) {
            setCart(cart.filter((val) => val.id !== product.id))

        } else {
            setCart(
                cart.map((val) =>
                    val.id === product.id ? {...val, qty: val.qty - 1 } : val
                )
            )
        }
    }
    const onDelete = (product) => {
        setCart(cart.filter((val) => val.id !== product.id))
    }

    // useEffect(() => {
    //     const storageCart = JSON.parse(localStorage.getItem("cart"))
    //     if (storageCart)
    //         setCart(storageCart)
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart])

    // return (< BrowserRouter >
    //     <
    //         Header cart={cart}
    //     />

    //     <
    //         Routes >
    //         <
    //             Route exact path="/"
    //             element={< Home data={data}
    //                 onAdd={onAdd}
    //             />} />
    //         <
    //             Route exact path="/product"
    //             element={< ListProduct data={data}
    //                 onAdd={onAdd}
    //             />} />
    //         <
    //             Route exact path="/contact"
    //             element={< Contact />}
    //         /> <
    //             Route exact path="/about"
    //             element={< About />}
    //         /> <
    //             Route path="/login"
    //             element={< Login />}
    //             exact />
    //         <
    //             Route path="/register"
    //             element={< Register />}
    //             exact />
    //         <
    //             Route path="/product/:id"
    //             element={< Details data={data}
    //                 onAdd={onAdd}
    //             />} exact />
    //         <
    //             Route path="/cart"
    //             element={< Cart cart={cart}
    //                 onAdd={onAdd}
    //                 onRemove={onRemove}
    //                 onDelete={onDelete}
    //             />} exact />

    //         <
    //                         /Routes> <
    //             Footer />
    //         <
    //                         /BrowserRouter>

    //         )
    //                 }
    //         export default App;return (
    return (
        <BrowserRouter>
            <Header cart={cart} />
            <Routes>
                <Route
                    exact path="/"
                    element={< Home data={data} onAdd={onAdd} />}
                />
                <Route
                    exact path="/product"
                    element={< ListProduct data={data} onAdd={onAdd} />}
                />
                <Route
                    exact path="/contact"
                    element={< Contact />}
                />
                <Route
                    exact path="/about"
                    element={< About />}
                />
                <Route
                    exact path="/login"
                    element={< Login />}
                />
                <Route
                    exact path="/register"
                    element={< Register />}
                />
                <Route
                    exact path="/product/:id"
                    element={< Details data={data} onAdd={onAdd} />}
                />
                <Route
                    exact path="/cart"
                    element={<
                        Cart cart={cart}
                        onRemove={onRemove}
                        onDelete={onDelete}
                        onAdd={onAdd} />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App