import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Connection</h1>
      <form>
        <input
          type="text"
          placeholder="Pseudo"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Connection</button>
        {err && <p>{err}</p>}
        <span>
          Tu n'as pas de compte ? <Link to="/register">Enregistre Toi</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
