import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('users');
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    setUsers([...users, newUser]);
    alert('User registered!');
    navigate('/');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border border-gray-300 rounded shadow-md w-[90%] md:w-[500px]">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-gray-100 p-2 rounded">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
      <div className="text-center mt-4">
        <span>Already registered? </span>
        <a href="/" className="text-blue-500 font-semibold underline hover:text-blue-700">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;