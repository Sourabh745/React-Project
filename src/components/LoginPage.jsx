import React, { useState } from 'react';
import MyDashboard from './MyDashboard';
import useToggle from './useToggle';
import '../styles/LoginStyle.css'

//dummy credentials
const users = [
  { username: "Sourabh", email: "abc@gmail.com", password: "sourabh1" },
  { username: "Ajay", email: "def@gmail.com", password: "sourabh2" },
  { username: "admin", email: "admin", password: "12345678" },
];
//========================================================================================

const LoginPage = () => {

  const [dayLight, toggle] = useToggle();

  // creating state to store email and password when logging
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(localStorage.getItem("user")); // store current user 


  const handleLogin = () => {
    const validUser = users.find((user) => user.email === email && user.password === password);
    if (validUser) {
      localStorage.setItem("user", email);
      setIsLogin(validUser.username);
    } else {
      alert("Invalid credentials, Please enter correct credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLogin(null);
  };

  return isLogin ? (
    <div >
      <button onClick={toggle}>
        {dayLight == true ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      {/* logout button */}
      <button onClick={handleLogout}>Logout</button>
      <MyDashboard name={isLogin} daylight={dayLight} />

    </div>
  ) : (
    <div className='login1'>
      <h1>Login</h1>
      <label htmlFor="">Email: </label>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="">Password: </label>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn--1" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
