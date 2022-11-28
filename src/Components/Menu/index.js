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
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/login">
                    <li>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        login
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Menu;