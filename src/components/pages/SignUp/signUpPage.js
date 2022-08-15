import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [habilitado, setHabilitado] = useState(true);

  const navigate = useNavigate();

  function cadastrarUsuario(event) {
    event.preventDefault();
    setHabilitado(false);

    const dadosCadastrados = {
      email,
      password,
      username,
      pictureUrl,
    };
    const API_URL = process.env.REACT_APP_API_URL;
    if ((email || password || username || pictureUrl) !== null) {
      const URL = `${API_URL}/signup`;

      const promise = axios.post(URL, dadosCadastrados);
      promise
        .then((_) => {
          navigate("/");
        })
        .catch((_) => {
          Notify.failure("Esse email já está em uso");
          setHabilitado(true);
        });
    }
  }

  return (
    <Conteudo>
      <LogoArea>
        <h1>linkr</h1>
        <span>
          save, share and discover <br /> the best links on the web
        </span>
      </LogoArea>
      {habilitado ? (
        <DivFormulario>
          <Formulario onSubmit={cadastrarUsuario}>
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="picture url"
              type="url"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </Formulario>
          <Link to="/">Switch back to log in</Link>
        </DivFormulario>
      ) : (
        <DivFormulario>
          <Formulario onSubmit={cadastrarUsuario}>
            <input type="email" placeholder="email" disabled />
            <input type="password" placeholder="password" disabled />
            <input type="text" placeholder="username" disabled />
            <input type="text" placeholder="picture url" disabled />
            <ThreeDots color="white" width="120" height={45} radius="9" />
          </Formulario>
          <Link to="/">Switch back to log in</Link>
        </DivFormulario>
      )}
    </Conteudo>
  );
}

const Conteudo = styled.div`
  display: flex;
  font-family: "Oswald", sans-serif;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LogoArea = styled.div`
  width: 60%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  box-sizing: border-box;
  padding: 0 80px;
  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 106px;
  }
  span {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
    flex-wrap: wrap;
    line-height: 1.2;
    @media (max-width: 900px) {
      font-size: 23px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 200px;
    padding: 20px 10px;
    text-align: center;
    box-sizing: border-box;
    font-size: 23px;
  }
`;
const DivFormulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  width: 40%;
  height: 100vh;
  padding: 0 60px;
  box-sizing: border-box;
  background-color: #333333;
  position: relative;
  a {
    color: #ffffff;
    text-align: center;
  }
  @media (max-width: 900px) {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333333;
    width: 100%;
    height: 77.7vh;
  }
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
  width: 100%;
  input {
    font-family: "Oswald", sans-serif;
    height: 45px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    font-weight: 400;
    font-size: 19.9px;
    padding-left: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    max-width: 400px;
    color: #9f9f9f;
  }
  button {
    font-family: "Oswald", sans-serif;
    height: 45px;
    width: 100%;
    background: #1877f2;
    border-radius: 4.6px;
    border: none;
    font-weight: 400;
    font-size: 20.9px;
    text-align: center;
    max-width: 400px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 0;
    input {
      box-sizing: border-box;
      width: 350px;
    }
    button {
      box-sizing: border-box;
      width: 350px;
    }
  }
`;
