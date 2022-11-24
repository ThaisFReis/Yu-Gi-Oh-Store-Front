import { Link } from 'react-router-dom';

// Css
import '../../Assets/Styles/Menu.css';

function Menu(){
    return (
        <div className="menu"> 
            <div className="title">
                <h1>Yu-Gi-Oh Store</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/singup">Cadastro</Link></li>
            </ul>
            <div className="user">
                <ion-icon name="person-circle-outline"></ion-icon>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Menu;