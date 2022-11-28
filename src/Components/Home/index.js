import axios from 'axios';
import React, {useState, useEffect} from 'react';

import Menu from '../Menu';
import Products from '../Products';

// CSS
import '../../Assets/Styles/Home.css';

export default function Home() {

    return (
        <div className="home">
            <Menu />
            <Products />
        </div>
    )
}