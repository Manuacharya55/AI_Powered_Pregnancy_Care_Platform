import React, { useState } from "react";
import Form from "../components/Form";
import { REGISTER } from "../utils/placholder";
import useAxios from "../hooks/useAxios";

const Register = () => {
  const { response, error, loading, handleRequest } = useAxios();

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
    console.log(error);
  };

  return (
    <div>
      <Form
        fields={REGISTER}
        handleChange={handleChange}
        data={user}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p style={{ color: "red" }}>Processing...</p>}
    </div>
  );
};

export default Register;
