import React, { useState } from 'react';
import './RegisterForm.css';
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., sending data to backend)
    console.log(formData);
  };

  return (
    <div className='register-wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleChange} required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="tel" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange} required />
                <FaPhone className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name="confirmPassword" placeholder='Retype Password' value={formData.confirmPassword} onChange={handleChange} required />
                <FaLock className='icon'/>
            </div>
            <button type="submit">Register</button>
        </form>
        <div className="login-link">
            <p>Already have an account? <button onClick={onClose}>Login</button></p>
        </div>
    </div>
  );
};

export default RegisterForm;
