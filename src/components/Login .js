import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import logoImg from "../path/logo.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #e0f2ff;
`;

const LoginBox = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FormSection = styled.div`
  padding: 75px;
  width: 360px;
`;

const SubTitle = styled.h4`
  color: #81a7ba;
  margin-bottom: -17px;
  font-style: regular;
  font-family: "Roboto";
`;

const Title = styled.h2`
  margin-bottom: 80px;
  color: #034f75;
  font-style: Bold;
  font-family: "Roboto";
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 17px;
  border: 1px solid #81a7ba;
  border-radius: 4px;
  color: #034f75;
`;

const Button = styled.button`
  width: 65%;
  padding: 10px;
  background-color: #bddcec;
  color: #034f75;
  font-size: 15px;
  font-style: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 15px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
`;

const LogoSection = styled.div`
  background-color: #006699;
  color: white;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 75px;
`;

const LogoTitle = styled.h3`
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
`;

function Login({ setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      const { token } = response.data;
      localStorage.setItem("token", token);

      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);

      navigate("/dashboard");
    } catch (error) {
      setError(error.response ? error.response.data.message : "Server error");
    }
  };

  return (
    <Container>
      <LoginBox>
        <FormSection>
          <SubTitle>Login to</SubTitle>
          <Title>Grouplist Application</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type="submit">Login</Button>
          </form>
        </FormSection>
        <LogoSection>
          <img src={logoImg} alt="Logo" width="80" />
          <LogoTitle>
            West Bengal Council Of Higher Secondary Education
          </LogoTitle>
        </LogoSection>
      </LoginBox>
    </Container>
  );
}

export default Login;
