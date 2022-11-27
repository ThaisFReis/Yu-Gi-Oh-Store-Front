import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopupWindow from '../PopUp/PopUp';


// Css
import "../../Assets/Styles/Menu.css";


// Context
import { userContext } from '../../Contexts/userContext.js';

function Menu() {
    
    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();
    const [carrinho, setCarrinho] = useState(true);

    function logOut(){
        setUser("");
        navigate("/login")
    }
    
    function showCart() {
        setCarrinho(!carrinho)
        if (carrinho === true) {
            alert(carrinho)
        }
    }
    return (
        <div className="menu">
             {user === null ? <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Cadastro</Link></li>
                <li><PopupWindow /></li>
            </ul> :
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Bem vindo, {user}!</li>
                    <li onClick={logOut} >Sair</li>
                    <li><PopupWindow /></li>
                </ul>
            }
            <div className="user">
                <ion-icon name="person-circle-outline"></ion-icon>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Menu;