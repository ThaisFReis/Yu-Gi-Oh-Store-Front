import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authContext } from '../../Contexts/authContext'; 

// CSS
import "../../Assets/Styles/Products.css";

// Images
import Coin from "../../Assets/Img/coin.png";

export default function Products() {
    const {token} = useContext(authContext);
    const [productData, setProductData] = useState([]);
    const [chooseCategory, setChooseCategory] = useState("");

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

    function addToCart(id){
        axios.post(`https://yu-gi-oh-api.onrender.com/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return (
        <>   
            <div className="categories">
                <p> Escolha uma categoria de cartas: </p>
                <button onClick={() => setChooseCategory("todas")}> Todas </button>
                <button onClick={() => setChooseCategory("armadilha")}>Armadilha</button>
                <button onClick={() => setChooseCategory("magia")}>Magia</button>
                <button onClick={() => setChooseCategory("monstro")}>Monstro</button>
            </div>

            <div className="products">
                {productData.map((product) => {
                    if (chooseCategory === "todas" || chooseCategory === "") {
                        return (
                            <div className="product" key={product._id}>
                                <div className="product-category">{product.category}</div>
                                <div className="product-name">{product.name}</div>
                                <img src={product.image} alt={product.name} />
                                <div className="product-footer">
                                    <div className="product-price">
                                        <img src={Coin} alt="coin" />
                                        <p>{product.price}</p>
                                    </div>
                                    <button className="product-button" onClick={() => addToCart(product._id)} >
                                        <ion-icon name="cart-outline"></ion-icon>
                                        <p>Comprar</p>
                                    </button>
                                </div>
                            </div>         
                        )
                    }
                    
                    else if (chooseCategory === product.category) {
                        return (
                            <div className="product" key={product.id}>
                                <div className="product-category">{product.category}</div>
                                <div className="product-name">{product.name}</div>
                                <img src={product.image} alt={product.name} />
                                <div className="product-footer">
                                    <div className="product-price">
                                        <img src={Coin} alt="coin" />
                                        <p>{product.price}</p>
                                    </div>
                                    <button className="product-button">
                                        <ion-icon name="cart-outline"></ion-icon>
                                        <p>Comprar</p>
                                    </button>
                                </div>
                            </div>  
                        )
                    }
                })}
            </div>
        </>
    )
}


/*
<div className="products">
                {productData.map((product) => {
                    return (
                        <div className="product" key={product.id}>
                            <div className="product-category">{product.category}</div>
                            <div className="product-name">{product.name}</div>
                            <img src={product.image} alt={product.name} />
                            <div className="product-footer">
                                <div className="product-price">
                                    <img src={Coin} alt="coin" />
                                    <p>{product.price}</p>
                                </div>
                                <button className="product-button">
                                    <ion-icon name="cart-outline"></ion-icon>
                                    <p>Comprar</p>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
*/
