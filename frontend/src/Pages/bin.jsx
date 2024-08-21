import React, { useState } from 'react';
import axios from '../utils/axios';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/signup', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
   <div>Hello</div>
  );
};

export default SignUpPage;

/*<div className="login-box">
        <form action="">
          <h2>SignUp</h2>
          <div className="input-box">
            <span className="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required name="" id="" />
            <label for="">Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required name="" id="" />
            <label for="">Password</label>
          </div>
          <div className="remember-forget">
            <label for=""><input type="checkbox" name="" id=""/>Remember me</label>
            <a href="">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="">Register</a></p>
          </div>
        </form>
    </div>*/