import axios from 'axios';
import React, {useState, useEffect} from 'react';

import Menu from '../Menu';

function Home (){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts(){
            try{
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error){
                console.log(error);
            }
        }
        getProducts();
    }, []);

    //Render products
    const renderProducts = () => {
        return products.map((product, index) => {
            return (
                <div key={index}>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <p>{product.price}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <Menu />
            <h1>Home</h1>
            {renderProducts()}
        </div>
    )
}

export default Home;