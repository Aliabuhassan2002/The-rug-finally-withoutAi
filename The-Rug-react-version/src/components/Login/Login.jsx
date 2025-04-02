import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Lock, Mail } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/auth/login',
        formData,
        { withCredentials: true }
      );

      Cookies.set('token', data.token, { expires: 7 });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)',
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 w-96 border border-white/20">
        <h2 className="text-2xl font-semibold text-center text-white mb-8">
          Welcome Back
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-100 text-center text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300 transform hover:scale-[1.02]"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-white">
          <p className="text-white/80">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-white underline hover:text-white/80 transition"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;