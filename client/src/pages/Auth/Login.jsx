import React, { useState } from "react";
import Form from "../../components/Form";
import { LOGIN } from "../../utils/placholder";
import useAxios from "../../hooks/useAxios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { response, error, loading, handleRequest } = useAxios();
  const { setLocalStorage } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleRequest({
      method: "post",
      url: "auth/login",
      data: user,
      token: "",
    });
    setUser({
      name: "",
      email: "",
      password: "",
    });
    console.log(response);
    setLocalStorage(response.data);
    navigate("/home");
  };

  return (
    <div id="auth-holder">
      <div id="dot"></div>
      <div id="auth-form">
        <span id="heading">Login Here</span>
        <Form
          fields={LOGIN}
          handleChange={handleChange}
          data={user}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <span id="link">
          Don't have an account ? <NavLink to="/register">Register Here</NavLink>
        </span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p style={{ color: "red" }}>Processing...</p>}
      </div>
    </div>
  );
};

export default Login;
