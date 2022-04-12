import React from 'react';
import './Product.css';

const Products = (props) => {
    const { id, name, price, ratings, img, seller } = props.product;
    // console.log(name);
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name.slice(0, 22)}</p>
                <p className="gray-color"><small>Price: {price}</small></p>
                <p className="gray-color"><small>Seller: {seller}</small></p>
                <p className="gray-color"><small>Ratings: {ratings} stars</small></p>
            </div>
            <div>
                <button onClick={()=>props.handleAddToCart(props.product)} className="btn">Add to cart</button>
            </div>

        </div>
    );
};

export default Products;