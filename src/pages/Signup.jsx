import React, { useState } from "react";
import imagesPath from "../data/imagesPath.json";
import Footer from "../components/Footer";
import Side from "../components/Side";
import "../index.css"; // Ensure this import is present for placeholder styling

const InputField = ({ label, type, id, placeholder, required, children }) => (
  <div className="relative">
    <label
      className="block text-sm font-medium mb-[0.87rem] text-[#484848] font-inter"
      htmlFor={id}
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] border border-[#CCC] bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
    />
    {children}
  </div>
);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex min-h-screen w-full">
        <Side />
        <div className="flex flex-col justify-center items-center w-full md:w-[45%] px-2 md:px-8 lg:px-16">
          <h2 className="text-3xl font-semibold mb-8 text-[#0771EF] font-inter text-1.5rem font-bold">
            Sign Up To Continue
          </h2>
          <form className="space-y-4 ml-[-5rem]">
            <InputField
              label="Name"
              type="text"
              id="name"
              placeholder="Name"
              required
            />
            <InputField
              label="Company"
              type="text"
              id="company"
              placeholder="Company"
              required
            />
            <InputField
              label="Email"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password (at least 8 characters)"
              required
            >
              <img
                src={imagesPath.Signup.eyeIcon}
                alt="Show/Hide Password"
                className="absolute right-3 top-[3.5rem] cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </InputField>
            <div className="flex items-center justify-between mt-2 w-full">
              <div className="flex items-center">
                <input
                  className="h-6 w-6 text-black bg-gray-200 rounded focus:ring-blue-500 border-gray-300"
                  type="checkbox"
                  id="remember-me"
                />
                <label
                  className="ml-2 block text-sm text-gray-700"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
