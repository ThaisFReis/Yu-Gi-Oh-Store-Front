import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// URL da API
import { API_URL } from '../../Constants/ApiUrl.js';

// Menu
import Menu from '../Menu';

// CSS
import '../../Assets/Styles/SignUp.css';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email,
      name,
      password,
      passwordConfirmation
    }

    try {
      await axios.post(`${API_URL}/auth/signup`, body);
      console.log("Cadastro realizado com sucesso!");

      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar");
      console.log(error);
    }
  }

  return (
    <div className="signup">
      <Menu />
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder='Digite seu nome' value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" placeholder='Digite sua senha' value={password} onChange={e => setPassword(e.target.value)} />
        <label htmlFor="passwordConfirmation">Confirme sua senha:</label>
        <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder='Confirme sua senha' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
        <button type="submit">Cadastrar:</button>
      </form>
      <button className="login"><Link to="/login">Já tem uma conta? Entre agora!</Link></button>
    </div>
  );
}

export default SignUp;