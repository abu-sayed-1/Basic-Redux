import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    const products ={
        border: '2px solid tomato',
        margin: '2rem',
        padding: '2rem'
    };

    return (
        <div style={products}>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;