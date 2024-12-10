import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // To store error messages
  const [loading, setLoading] = useState<boolean>(false); // To show a loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading while making the request

    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      });

      // If registration is successful
      alert('Registration successful');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      // If error occurs
      setError(null); // Reset the error message before handling the new error

      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data || 'Something went wrong, please try again';
        setError(errorMessage as string);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {/* Display error if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegisterForm;
