import React, { useState } from 'react'
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = (e) => {
     // Logic to handle Login form
   };

  return (
      <div className='form-box'>
        <form className='form' onSubmit={handleLogin}>
          <span className='title'>Log In</span>
          <span className='subtitle'>Log in to your account</span>
          <div className='form-container'>
            <input type="email"
            className='input'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password" 
              className='input'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
          <button type='submit' className='login-button'>Log In</button>
        </form>
        <div className='form-section'>
          <p>Don't have an account? <a href='/signup'>Sign up</a></p>
        </div>
      </div>
  );
}

export default Login;