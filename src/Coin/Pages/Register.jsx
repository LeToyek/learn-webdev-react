import React, { useState } from "react";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("")
  const [user, setUser] = useState(null);

  const fetchUser = async () =>{
    await fetch("http://localhost:5000/register/",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
  }

  const addUser = (e) => {
    e.preventDefault();
    setUser({ first_name: firstName,last_name: lastName, email: email, password: pass,phone });
    fetchUser()
  };

  return (
    <div className="Register">
      <div className="wrapper">
          <div className="title">
            <h1>Coin Batam</h1>
          </div>
          <h2>Register</h2>
          <form onSubmit={addUser}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="submit">Create An Account</button>
          </form>
        </div>
      </div>
  );
};

export default Register;
