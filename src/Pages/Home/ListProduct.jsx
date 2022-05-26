import React from 'react'
import Styled from 'styled-components';
import Carousel from 'react-elastic-carousel'
import Product from '../Product'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

function ListProduct(props) {

    const Item = Styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        width: 30rem;
        margin: 0 .5rem;
        
    `
    const App = Styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
    `
    const H1 = Styled.h1`
        text-align: center;
        margin: 5rem auto;
        opacity: 0.7;
        border-bottom: 2px solid #000;
        width: fit-content;
    `

    return (
        <div>
            <H1>Sản phẩm nổi bật</H1>
            <App className="App">
                
                <Carousel breakPoints={breakPoints} className="list-product">
                    {
                        props.data.map((val, index) => (
                            <Item key={index}>
                                <Product
                                    key={index}
                                    id={val.id}
                                    image={val.img}
                                    title={val.title}
                                    price={val.price}
                                    product={val}
                                    onAdd={props.onAdd}
                                />

                            </Item>
                        ))
                    }
                    
                    {/* <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                    <Item>7</Item>
                    <Item>8</Item> */}
                </Carousel>
            </App>

        </div>
    );
}

export default ListProduct
