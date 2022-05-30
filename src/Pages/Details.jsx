import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './Products/Product'
import { useSelector } from 'react-redux'

function Details(props) {
    
    const data = useSelector(state => state.shop.products)
     const {id} = useParams()
    // console.log('param: ', id)

    const productFind = data.find((val) => {
        return val.id == id
    })

    return (

        <div className="content-product">
            <h1 style={{textAlign: "center", margin: "2rem 0 6rem 0"}}>Details/</h1>
            <div className="list-product product-detail">
                <Product
                id={productFind.id}
                image={productFind.img}
                title={productFind.title}
                price={productFind.price}
                desc={productFind.desc}
                product={productFind}
            />

            </div>
        </div>
    )
}

export default Details
