import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border border-gray-300 rounded shadow-md w-[90%] md:w-[500px]">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-gray-100 p-2 rounded">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 ml-1 text-sm font-medium">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label className="block mb-1 ml-1 text-sm font-medium">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <span>Don't have an account? </span>
        <a href="/signup" className="text-blue-500 font-semibold underline hover:text-blue-700">
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;