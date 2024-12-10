import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      localStorage.setItem('authToken', response.data.token);
      alert('Login successful');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert('Error: ' + (err.response?.data || err.message));
      } else {
        // Handle other errors
        alert('An unexpected error occurred');
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email diri"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
