import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopupWindow from '../PopUp/PopUp';


// Css
import "../../Assets/Styles/Menu.css";


// Context
import { userContext } from '../../Contexts/userContext.js';

function Menu() {
    
    const { user, setUser } = useContext(userContext);
    const [hasItems, setHasItems] = useState(true);
    const navigate = useNavigate();

    function logOut(){
        setUser(null);
        setHasItems(false);
        navigate("/login");
    }
    return (
        <div className="menu">
             {user === null ? 
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/login">
                        <li>
                            <ion-icon name="person-circle-outline"></ion-icon>
                            login
                        </li>
                    </Link>
                    <li><PopupWindow hasItems={hasItems} setHasItems={setHasItems} /></li>
                </ul> 
            :
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Bem vindo, {user}!</li>
                    <li onClick={logOut} >Sair</li>
                    <li><PopupWindow /></li>
                </ul>
            }
        </div>
    )
}

export default Menu;