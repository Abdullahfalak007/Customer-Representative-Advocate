// src/Signup.jsx
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className="relative w-1/2 flex-shrink-0 h-full"
        style={{ width: "60.55431rem", height: "47.14175rem" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 674 851"
          fill="none"
          className="absolute inset-0"
        >
          <path
            d="M-80.3472 -58.9272L-80.3472 909.941L591.071 909.941C700.839 788.684 756.567 245.173 395.699 -58.9273L-80.3472 -58.9272Z"
            fill="url(#paint0_linear_84_14225)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_84_14225"
              x1="-80.3472"
              y1="425.507"
              x2="673.921"
              y2="425.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0771EF" />
              <stop offset="1" stopColor="#0771EF" stopOpacity="0.74" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Form Container */}
      <div className="flex items-center justify-center w-1/2 bg-gray-100">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Sign Up To Continue
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">Remember me</label>
          </div>
          <div className="mb-4 text-right">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
