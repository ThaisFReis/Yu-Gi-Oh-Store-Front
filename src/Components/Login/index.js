import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Menu
import Menu from '../Menu';

// CSS
import '../../Assets/Styles/Login.css';

function Login() {

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
            await axios.post("http://localhost:5000/login", body);
            console.log("Log-in realizado com sucesso!");

            navigate("/");
        } catch (error) {
            alert("Erro ao cadastrar");
            console.log(error);
        }
    }

    return (
        <div className="login">
            <Menu />
            <h2>Log-in</h2>
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