import React, { useState } from 'react';
import img0 from "../assets/img0.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false, // Tracks if the user is logging in as admin
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.isAdmin) {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="grid grid-cols-1 place-content-center sm:grid-cols-2">
      <div className="hidden sm:block">
        <img src={img0} alt="login-image" className="h-screen w-full" />
      </div>
      <div className="flex flex-col justify-between py-4">
        <Link to={"/"} className="text-center font-semibold">
          CleanSwift
        </Link>
        <form onSubmit={handleSubmit} className="flex flex-col px-24 gap-4">
          <h1 className="text-[2.074rem] font-semibold">Login</h1>
          <p className="opacity-60 max-w-md mb-4">
            Welcome back! Please log in to access your dashboard and manage your cleaning services.
          </p>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="on"
              required
              className="border py-2 px-4 rounded outline-none focus:border-stone-950"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="on"
              required
              className="border py-2 px-4 rounded outline-none focus:border-stone-950"
            />
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            />
            <label htmlFor="isAdmin">Login as Admin</label>
          </div>
          <button
            type="submit"
            className="bg-stone-950 hover:bg-opacity-90 text-white border py-4 mt-4 rounded-full"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{' '}
          <Link to={"/signup"} className="hover:underline underline-offset-2 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
