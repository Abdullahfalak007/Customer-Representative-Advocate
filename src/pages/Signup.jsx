// import React from "react";
// import imagesPath from "../data/imagesPath.json";

// const Signup = () => {
//   return (
//     <div className="flex min-h-screen w-full">
//       <div
//         className="hidden md:flex flex-col items-center justify-start p-8"
//         style={{
//           backgroundImage: `url(${imagesPath.Signup.sidebarBackground})`,
//           width: "55%",
//           backgroundSize: "cover",
//         }}
//       >
//         <img
//           src={imagesPath.Signup.logo}
//           alt="Logo"
//           className="mr-80 mt-16 mb-8 w-[11.5625rem] h-[4.5rem]"
//         />
//         <img
//           src={imagesPath.Signup.robotIcon}
//           alt="Robot Interacting with Computer"
//           className="mr-28 mt-8 w-[25.18019rem] h-[22.9375rem]"
//         />
//         <div className="mt-2">
//           <div className="flex items-center mb-4 mr-32">
//             <img
//               src={imagesPath.Signup.checkmark}
//               alt="Checkmark"
//               className="h-6 w-6 mr-2"
//             />
//             <span className="text-white text-lg">
//               Comprehensive Project Insights
//             </span>
//           </div>
//           <div className="flex items-center mb-4">
//             <img
//               src={imagesPath.Signup.checkmark}
//               alt="Checkmark"
//               className="h-6 w-6 mr-2"
//             />
//             <span className="text-white text-lg">Real-time Status Updates</span>
//           </div>
//           <div className="flex items-center mb-4">
//             <img
//               src={imagesPath.Signup.checkmark}
//               alt="Checkmark"
//               className="h-6 w-6 mr-2"
//             />
//             <span className="text-white text-lg">
//               Expert Support at Your Fingertips
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center w-full md:w-[45%] px-2 md:px-8 lg:px-16">
//         <h2 className="text-3xl font-semibold mb-8">Sign Up To Continue</h2>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="text"
//               id="name"
//               placeholder="Name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="company">
//               Company
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="text"
//               id="company"
//               placeholder="Company"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="email"
//               id="email"
//               placeholder="Email"
//             />
//           </div>
//           <div>
//             <label
//               className="block text-sm font-medium mb-1"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="password"
//               id="password"
//               placeholder="Password (at least 8 characters)"
//             />
//           </div>
//           <div className="flex items-center">
//             <input
//               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               type="checkbox"
//               id="remember-me"
//             />
//             <label className="ml-2 block text-sm" htmlFor="remember-me">
//               Remember me
//             </label>
//           </div>
//           <div className="flex items-center justify-between">
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Forgot Password?
//             </a>
//           </div>
//           <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import imagesPath from "../data/imagesPath.json";

const features = [
  "Comprehensive Project Insights",
  "Real-time Status Updates",
  "Expert Support at Your Fingertips",
];

const InputField = ({ label, type, id, placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  </div>
);

const Signup = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div
        className="hidden md:flex flex-col items-center justify-start p-8"
        style={{
          backgroundImage: `url(${imagesPath.Signup.sidebarBackground})`,
          width: "55%",
          backgroundSize: "cover",
        }}
      >
        <img
          src={imagesPath.Signup.logo}
          alt="Logo"
          className="mr-80 mt-16 mb-8 w-[11.5625rem] h-[4.5rem]"
        />
        <img
          src={imagesPath.Signup.robotIcon}
          alt="Robot Interacting with Computer"
          className="mr-28 mt-8 w-[25.18019rem] h-[22.9375rem]"
        />
        <div className="mt-2">
          {features.map((feature, index) => (
            <div className="flex items-center mb-4 mr-32" key={index}>
              <img
                src={imagesPath.Signup.checkmark}
                alt="Checkmark"
                className="h-6 w-6 mr-2"
              />
              <span className="text-white text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-[45%] px-2 md:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold mb-8">Sign Up To Continue</h2>
        <form className="space-y-4">
          <InputField label="Name" type="text" id="name" placeholder="Name" />
          <InputField
            label="Company"
            type="text"
            id="company"
            placeholder="Company"
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Email"
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="Password (at least 8 characters)"
          />
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
