import React, { useState } from "react";
import imagesPath from "../data/imagesPath.json";
import Side from "../components/Side";
import Footer from "../components/Footer";
import InputField from "../components/InputField";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex min-h-screen w-full">
        <Side />
        <div className="flex flex-col justify-center items-center w-full md:w-[45%] px-2 md:px-8 lg:px-16">
          <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-center w-full">
            Welcome Back, Login To Continue
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
              placeholder="Password"
              required
              children={
                <img
                  src={imagesPath.Signup.eyeIcon}
                  alt="Show/Hide Password"
                  className="absolute right-3 top-[3.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              }
            />
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
            <button
              type="submit"
              className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <a href="/signup" className="text-blue-500 hover:underline">
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
