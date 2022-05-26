import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/Shopping/action'
import { useSelector } from 'react-redux'



function Product(props) {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.shop.cart)
    
    return (
            <div className="product">
                <div className="product-img">
                    <img src={props.image} alt="" />

                </div>
                <div className="product-footer">
                    <Link to = {`/product/${props.id}`}>
                        <h4>{props.title}</h4>

                    </Link>
                <p>Price: <span>${props.price}</span></p>
                <p>{props.desc}</p>
                <button onClick={() =>
                    
                    //props.onAdd(props.product)
                    dispatch(addToCart(props.product))
                
                }>Add to cart</button>
                </div>

                

            </div>
        
    )
}

export default Product
