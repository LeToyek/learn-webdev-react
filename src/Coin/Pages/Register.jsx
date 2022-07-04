import React, { useState } from "react";
import Loading from "../components/Loading";
import SuccessDialog from "../components/SuccessDialog";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchUser = async () => {
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: pass,
        phone,
      }),
    });
    setIsLoading(false);
    setIsSuccess(true);
  };
  const addUser = (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      setTimeout(() => {
        fetchUser();
      }, 1500);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Register">
      <div className="wrapper">
        {isLoading ? <Loading /> : null}
        {isSuccess ? (
            <SuccessDialog />
        ) : null}
        <div className="title">
          <h1>Coin Batam</h1>
        </div>
        <h2>Register</h2>
        <form onSubmit={addUser}>
          <input
            required
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <input
            required
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
