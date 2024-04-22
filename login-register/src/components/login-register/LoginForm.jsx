import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errors: {
      username: '',
      password: '',
      login: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: ''
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    let errors = {};

    // Validation
    if (!username.trim()) {
      errors.username = 'Username/Email is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      // Simulating login attempt (replace with actual login logic)
      if (username === 'user@example.com' && password === 'password') {
        // Successful login
        console.log('Login successful!');
        setFormData({ ...formData, errors: { ...formData.errors, login: '' } });
      } else {
        // Incorrect credentials
        console.log('Login failed: Incorrect username or password');
        setFormData({ ...formData, errors: { ...formData.errors, login: 'Incorrect username or password' } });
      }
    } else {
      // Update state with validation errors
      setFormData({ ...formData, errors });
    }
  };

  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <label htmlFor="username">Username or Email</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                <FaUser className='icon'/>
            </div>
            {formData.errors.username && <p className="error-message">{formData.errors.username}</p>}
            <div className="input-box">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                <FaLock className='icon'/>
            </div>
            {formData.errors.password && <p className="error-message">{formData.errors.password}</p>}
            
            <button type="submit">Login</button>

            {formData.errors.login && <p className="error-message">{formData.errors.login}</p>}

            <div className="register-link">
                <p>Don't have an account? <a href="/register">Register</a>
</p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;
