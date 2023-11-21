import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  return (
    <div className="auth">
      <h1 className="loginText">Login</h1>
      <form className="formLogin">
        <input className="inputlogin"
          required
          type="text"
          placeholder="username"
          name="username"
         />
        <input className="inputlogin"
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login