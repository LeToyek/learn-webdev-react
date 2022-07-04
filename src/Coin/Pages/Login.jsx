import React, { useState } from "react";
import Loading from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="login-page">
      <div className="wrapper">
        {isLoading ? <Loading /> : null}
        <h1>Coin Batam</h1>
        <h2>Register</h2>
        <form onSubmit={() => {}}>
          <input
            required
            type="email"
            className="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            className="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
