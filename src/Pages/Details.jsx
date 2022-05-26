import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

function Details(props) {
    
    
    const {id} = useParams()
    console.log('param: ', id)

    const productFind = props.data.find((val) => {
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
                onAdd={props.onAdd}
                product={productFind}
            />

            </div>
        </div>
    )
}

export default Details
