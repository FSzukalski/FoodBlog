import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  return (
    <div className="auth">
      <h1 className="registerText">Register</h1>
      <form className="formRegister">
        <input className="inputRegister"
          required
          type="text"
          placeholder="username"
          name="username"
        />
        <input className="inputRegister"
          required
          type="email"
          placeholder="email"
          name="email"
        />
        <input className="inputRegister"
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register