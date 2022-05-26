import React from 'react'
import Product from './Product'
import Styled from 'styled-components'



function ListProduct(props) {

    const H1 = Styled.h1`
        text-align: center;
        margin: 10rem auto;
        opacity: 0.7;
        border-bottom: 2px solid #000;
        width: fit-content;
    `
    
    
    return (
        
        <div className="content-product">
            <H1>PRODUCT</H1>
            <div className="list-product">
                {props.data.map((val, index) => (
                    <Product
                        key={index}
                        id = {val.id}
                        image={val.img}
                        title={val.title}
                        price={val.price}
                        product={val}
                        onAdd = {props.onAdd}
                    />
                ))}

            </div>
        </div>
    )
}

export default ListProduct
