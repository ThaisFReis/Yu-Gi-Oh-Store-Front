import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../Constants/ApiUrl';

// Menu
import Menu from '../Menu';

// CSS
import '../../Assets/Styles/Login.css';

// Contexts
import { authContext } from '../../Contexts/authContext';
import { userContext } from '../../Contexts/userContext';

function Login() {

    const { setUser } = useContext(userContext);
    const {setToken} = useContext(authContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const body = {
            email,
            password
        }

        try {
            const promise = await axios.post(`${API_URL}/auth/login`, body);
            setUser(promise.data.name)
            setToken(promise.data.token)
            navigate("/");
        } catch (error) {
            alert("Erro ao fazer o login");
            console.log(error);
        }
    }

    return (
        <div className="login">
            <Menu />
            <h1>Log-in</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" placeholder='Digite sua senha' value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Fazer o log-in</button>
            </form>
            <button className="signup"><Link to="/signup">Não tem uma conta? Cadastre-se já!</Link></button>
        </div>
    );
}

export default Login;