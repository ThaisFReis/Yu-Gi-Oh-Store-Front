import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../../Assets/Styles/Products.css";

export default function Products() {

    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const { data } = await axios.get('https://yu-gi-oh-api.onrender.com/products');
                setProductData(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        getAllProducts();
    }
    , []);

    return (
            <div className="products">
                {productData.map((product) => {
                    return (
                        <div className="product" key={product.id}>
                            <div className="product-category">{product.category}</div>
                            <div className="product-name">{product.name}</div>
                            <div className="product-image"><img src="{product.image}" alt={product.name} /></div>
                            <div className="product-price">{product.price}</div>
                        </div>
                    )
                })}
            </div>
    )
}