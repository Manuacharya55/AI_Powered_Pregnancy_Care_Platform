import React, { useState } from "react";
import Form from "../components/Form";
import { REGISTER } from "../utils/placholder";
import useAxios from "../hooks/useAxios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { response, error, loading, handleRequest } = useAxios();
  const {setLocalStorage} = useAuth();
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
    await handleRequest({
      method: "post",
      url: "auth/register",
      data: user,
      token: "",
    });
    setUser({
      name: "",
      email: "",
      password: "",
    });
    setLocalStorage(response)
    navigate("/home")
  };

  return (
    <div id="auth-holder">
      <div id="dot"></div>
      <div id="auth-form">
        <span id="heading">Register Here</span>
        <Form
          fields={REGISTER}
          handleChange={handleChange}
          data={user}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <span id="link">
          Already have an account ? <NavLink>Login Here</NavLink>
        </span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p style={{ color: "red" }}>Processing...</p>}
      </div>
    </div>
  );
};

export default Register;
