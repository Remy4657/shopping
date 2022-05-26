import React, {useEffect} from 'react'
import styled from 'styled-components'
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'
import { useSelector } from 'react-redux'

function Cart(props) {


    
    const Payment = styled.div`
    flex: 3;
    border: solid 1px #ccc;
    margin-left: 4rem;
    padding: 2rem;
    border-radius: 1rem;
    height: fit-content;
 
    `
    const cart = useSelector(state => state.shop.cart)

    function getSum(total, num) {
        return total + num.price * num.qty;
    }
    //const Subtotal = props.cart.reduce(getSum, 0)
    const Subtotal = cart.reduce(getSum, 0)
    const shipFee = Subtotal * 0.1
    const discountShip = shipFee * -0.2
    const total = Subtotal + shipFee + discountShip

    console.log('cart: ', cart)

    return (
        <div className="cart">
            <div className="content-product">
                <h1 style={{ textAlign: "center", margin: "2rem 0 6rem 0" }}>Cart/</h1>

                {cart.length === 0 && <div style={{ textAlign: "center" }}>Cart is empty</div>}

                {cart.length > 0
                    &&
                    <div className="content-product-pay">
                        <div className={styles.div_Listproduct}>
                            {cart.map((val, index) => (

                                
                                <CartItem key={index} product={val} onRemove={props.onRemove} onAdd={props.onAdd} onDelete={props.onDelete}/>
                            ))}
                        </div>

                        <Payment className="payment">
                            <h2>ORDER SUMMARY</h2>
                            <div>
                                <p>Subtotal:</p>
                                <span>${Subtotal}</span>
                            </div>
                            <div>
                                <p>Estimated Shipping:</p>
                                <span>${shipFee.toFixed()}</span>
                            </div>
                            <div>
                                <p>Shipping Discount:</p>
                                <span>${discountShip.toFixed()}</span>
                            </div>
                            <div>
                                <h3>Total:</h3>
                                <span>${total.toFixed()}</span>
                            </div>
                            <button>Payment</button>
                        </Payment>

                    </div>

                }

            </div>
        </div>
    )
}

export default Cart
