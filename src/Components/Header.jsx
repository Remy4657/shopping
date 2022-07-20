import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Header.scss'

function Header(props) {

    const cart = useSelector(state=>state.shop.cart)

    const [toggle, setToggle] = useState(false)
    const handleToggleMenu = () => {
        setToggle(true)
        console.log(toggle)
    }
    const handleToggleClose = () => {
        setToggle(false)
    }
    return (
        <header>
            <AiOutlineMenu className="icon-menu" onClick={handleToggleMenu}/>
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
                    <Link to="/login">LOGIN/</Link>
                    <Link to="/register">REGISTER</Link>
                </li>

                <li>
                    
                    <AiOutlineClose className="icon-close" onClick={handleToggleClose}/>

                </li>
            </ul>
            
            

            <div className="header-cart">
                <Link to="/cart">
                    <FaShoppingCart className="icon-cart" /><sup>{cart.length}</sup>

                </Link>
                
            </div>
        </header>
    )
}

export default Header
