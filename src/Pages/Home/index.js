import axios from 'axios';
import React, {useState, useEffect} from 'react';

import Menu from '../Menu';

export default function Home() {

    const [ productData, setProductData ] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                
                const { data } = await axios.get('localhost:5000/');
                setProductData(data);
                console.log(data)

            } catch (error) {
                console.log(error);
            }
        }
        getAllProducts();

    }, []);

    return (
        <div>
            <Menu />
            <h1>Home</h1>
        </div>
    )
}