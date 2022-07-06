import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState("")
  const history = useHistory()

  const fetchUser = async () =>{
    
    const raw = await fetch("http://localhost:5000/login",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password: pass
      })
    })
    
    const data = await raw.json()
    console.log(data);
    if (data.statusError === true) {
      setError(data.message)
      setIsLoading(false)
      return
    }
    data && setToken(data)
    setIsLoading(false)
    history.push("/market")
    
  }
  const loginUser = (e) =>{
    e.preventDefault()
    setIsLoading(true)
    try {
      setTimeout(() => {
        fetchUser()
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login-page">
      <div className="wrapper">
        {isLoading ? <Loading /> : null}
        <h1>Coin Batam</h1>
        <h2>Login</h2>
        
        <form onSubmit={loginUser}>
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
          {error && <h5>{error}</h5>}
          <button className="submit">Login</button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
