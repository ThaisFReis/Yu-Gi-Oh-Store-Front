import { Link } from 'react-router-dom';

// Css
import '../../Assets/Styles/Menu.css';

function Menu(){
    return (
        <div className="menu">       
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Cadastro</Link></li>
            </ul>
        </div>
    )
}

export default Menu;