import React, { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(null);
  const addUser = (e) => {
    e.preventDefault();
    setUser({ name: name, email: email, password: pass });
    console.log(user);
  };

  return (
    <div className="Register">
      <div className="wrapper">
        <img src={require("../assets/register.png")} alt="My SVG" />
        <div className="right">
          <div className="title">
            <h1>Beli Coin</h1>
          </div>
          <h2>Register</h2>
          <form onSubmit={addUser}>

            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button className="submit">Create An Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
