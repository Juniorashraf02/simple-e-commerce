import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(result => result.json())
        .then(data => setProducts(data));
    },[]);
    const handleAddToCart =(product)=>{
        console.log(product);
    }
    return (
        <div className='shop'>
            <div className='shop-container'>
                {
                    products.map(product =><Product
                    key={product.id} product={product} handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div>
                <h1>this is summary section</h1>
            </div>
        </div>
    );
};

export default Shop;