import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import Swal from "sweetalert2";

function SignIn() {
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/timeline");
    }
  }, [auth, navigate]);

  function handleChange(e) {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  }

  async function handleSignIn(e) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const promise = await api.signIn({ ...signInData });
      setIsLoading(false);
      login(promise.data);
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 422) {
        setSignInData({
          email: "",
          password: "",
        });

        Swal.fire({
          icon: "error",
          title: "OOPS...",
          text: "Insira os dados corretamente, por favor.",
        });

        return;
      }

      if (error.response.status === 401) {
        setSignInData({
          email: "",
          password: "",
        });

        Swal.fire({
          icon: "error",
          title: "OOPS...",
          text: "Email e/ou senha incorretos, insira os dados corretamente, por favor.",
        });
      }

      if (error.response.status === 404) {
        setSignInData({
          email: "",
          password: "",
        });

        Swal.fire({
          icon: "error",
          title: "OOPS...",
          text: "Usuário não existente, faça um cadastro, por favor.",
        });

        return;
      }
    }
  }

  return (
    <Container>
      <Main>
        <Title>Linkr</Title>
        <Description>
          Save, share, and discover the best links on the web
        </Description>
      </Main>
      <Form onSubmit={handleSignIn}>
        <Input
          type={"email"}
          placeholder={"E-mail"}
          name={"name"}
          onChange={handleChange}
          value={signInData.email}
          disabled={isLoading}
          required
        />
        <Input
          type={"password"}
          placeholder={"Senha"}
          name={"password"}
          onChange={handleChange}
          value={signInData.password}
          disabled={isLoading}
          required
        />
        <Button type={"submit"} disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#FFF" height={50} width={50} />
          ) : (
            "Log In"
          )}
        </Button>
        <StyledLink to={"/signup"}>First time? Create an account!!</StyledLink>
      </Form>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-weight: bold;

  @media (max-width: 600px) {
    flex-direction: column;
  } ;
`;

const Main = styled.main`
  width: 65%;
  height: 100%;
  background-color: #151515;
  box-shadow: 4px 0px 4px 0px #00000040;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;

  @media (max-width: 600px) {
    width: 100%;
    height: 25%;
    z-index: 5;
    align-items: center;
    padding-left: 0px;
    padding-bottom: 30px;
  } ;
`;

const Title = styled.h1`
  min-height: 100vh;
  width: 35%;
  position: fixed;
  right: 0;

  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: flex-start;
    padding-top: 45%;
    width: 100%;
    height: 75%;
    z-index: 3;
  }
  @media (max-width: 480px) {
    padding-top: 55%;
  }
  @media (max-width: 380px) {
    padding-top: 65%;
  }
`;

const Description = styled.div`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 44px;

  max-width: 442px;
  width: 80%;

  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 23px;
    text-align: center;
    width: unset;
    max-width: 240px;
  }
  @media (max-width: 380px) {
    line-height: 34px;
  }
`;

const Form = styled.form`
  min-height: 100vh;
  width: 35%;
  position: fixed;
  right: 0;

  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: flex-start;
    padding-top: 45%;
    width: 100%;
    height: 75%;
    z-index: 3;
  }
  @media (max-width: 480px) {
    padding-top: 55%;
  }
  @media (max-width: 380px) {
    padding-top: 65%;
  }
`;

const Input = styled.input``;

const Button = styled.input``;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  text-decoration-line: underline;
  color: #ffffff;

  @media (max-width: 600px) {
    padding-top: 5%;
  }
`;
