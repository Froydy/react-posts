import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Импортируйте useNavigate
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context/index.js";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate(); // Получите navigate

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/posts");
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
