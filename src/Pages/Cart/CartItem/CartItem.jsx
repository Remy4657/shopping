import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, DELETE_FROM_CART} from '../../../redux/Shopping/action' 

function CartItem(props) {
    const Cartproduct = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        border: 1px solid #ccc;
        padding: 2rem;
        position: relative;
    `
    const cart = useSelector(state => state.shop.cart)
    const dispatch = useDispatch()
   
    
    return (
        <Cartproduct className="flex-column" key={props.product.id}>

            <div className={styles.div_Productimg}>
                <img className={styles.img} src={props.product.img} alt="" />
            </div>

            <div className={styles.div_Productfooter}>
                <h4>{props.product.title}</h4>

                <p>{props.product.desc}</p>

                <div className={styles.div_Control}>
                    <span className={styles.span}
                        //onClick={() => props.onRemove(props.product)}
                        onClick={() => dispatch(decrease(props.product.id))}
                    >-</span>
                    <span style={{ margin: "0 2rem", lineHeight: "100%" }}>{props.product.qty}</span>
                    <span className={styles.span}
                        //onClick={() => props.onAdd(props.product)}
                        onClick={() => dispatch(increase(props.product.id))}
                    
                    >+</span>
                </div>

                <p>Price: <span>{props.product.price * props.product.qty}</span></p>
            </div>

            <AiOutlineClose
                className="cart-icon-close"
                onClick={() => {
                    //props.onDelete(props.product)
                    dispatch(DELETE_FROM_CART(props.product.id))
                }}
            />
        </Cartproduct>
    )
}

export default CartItem
