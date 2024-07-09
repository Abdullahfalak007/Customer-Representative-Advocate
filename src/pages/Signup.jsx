import React from "react";
import imagesPath from "../data/imagesPath.json";

const Signup = () => {
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block"
        style={{
          backgroundImage: `url(${imagesPath.Signup.sidebarBackground})`,
          width: "38.55431rem",
          height: "40.14175rem",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col justify-center w-full md:w-1/2 px-2 md:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold mb-8">Sign Up To Continue</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="company">
              Company
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="company"
              placeholder="Company"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Password (at least 8 characters)"
            />
          </div>
          <div className="flex items-center">
            <input
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              type="checkbox"
              id="remember-me"
            />
            <label className="ml-2 block text-sm" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
