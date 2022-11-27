import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopupWindow from '../../Components/PopUp.js';

// Css
import '../../Assets/Styles/Menu.css';

// Context
import userContext from '../../Contexts/userContext';

function Menu() {

    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();

    function logOut(){
        setUser("");
        navigate("/login")
    }

    return (
        <div className="menu">
            {user === "" ? <ul>
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
        </div>
    )
}

export default Menu;