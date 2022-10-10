import './App.css';
import React, { useState } from "react";
import { LoginForm } from './components/loginForm';

function App() {

  const [user,setUser] = useState({name:"", email:"" });
  const [error, setError] = useState("");

  const Login = (details) =>{

    if(details.email !== '' && details.password !== ''){
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      setError("Mandetory fields could not be empty");
    }
  }

  const Logout = () =>{
    setUser({name:"",email: ""})
  }

  return (
    <div className="App">
    {
      (user.email !== "") ? (<div className="welcome">
          <h2>WelCome, <span>{user.name}</span></h2>
          <h2>Your Email is <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
      </div>) : (<LoginForm Login={Login} error={error} />)
    }
    </div>
  );
}

export default App;