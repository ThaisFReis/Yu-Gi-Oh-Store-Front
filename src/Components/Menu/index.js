import { useState } from 'react';
import { Link } from 'react-router-dom';
import PopupWindow from '../../Components/PopUp.js';

// Css
import '../../Assets/Styles/Menu.css';

function Menu() {
    const [carrinho, setCarrinho] = useState(true)
    function showCart() {
        setCarrinho(!carrinho)
        if (carrinho === true) {
            alert(carrinho)
        }
    }
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Cadastro</Link></li>
                <li><PopupWindow/></li>
            </ul>
            <div className="user">
                <ion-icon name="person-circle-outline"></ion-icon>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Menu;