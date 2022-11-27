import axios from 'axios';
import React, {useState, useEffect} from 'react';

import Menu from '../Menu';
import Products from '../Products';

export default function Home() {

    return (
        <div>
            <Menu />
            <h1>Home</h1>
            <Products />
        </div>
    )
}