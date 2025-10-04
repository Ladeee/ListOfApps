import { useState } from "react";
import axios from 'axios';
import './signup.css'

import React from 'react'

export default function Signup() {
  const base_url = process.env.REACT_APP_API_URL
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}/api/auth/signup`, formData)
      console.log(base_url)
      // save in local storage
      localStorage.setItem("token", response.data.token)
    } catch (error) {

    }
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleFormData}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleFormData}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
