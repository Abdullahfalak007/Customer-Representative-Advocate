// // src/components/Navbar.jsx
// import React from "react";
// import imagesPath from "../data/imagesPath.json";

// const Navbar = () => {
//   return (
//     <div className="bg-white p-4 flex justify-between items-center ">
//       <h1 className="text-xl font-semibold">Virtual Assistants</h1>
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <img
//             src={imagesPath.Navbar.searchIcon}
//             alt="Search"
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//           <input
//             type="text"
//             placeholder="Search Assistant"
//             className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-customBlue text-white"
//           />
//         </div>
//         <button className="bg-blue-600 text-white p-2 rounded-md">
//           <img src={imagesPath.Navbar.addIcon} alt="Add" className="w-4 h-4" />
//         </button>
//         <img
//           src={imagesPath.Navbar.notificationIcon}
//           alt="Notifications"
//           className="w-6 h-6"
//         />
//         <img
//           src={imagesPath.Navbar.avatarIcon}
//           alt="Avatar"
//           className="w-8 h-8 rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React from "react";
import imagesPath from "../data/imagesPath.json";

const Navbar = ({ openAddModal }) => {
  return (
    <div className="bg-white p-4 flex justify-between items-center ">
      <h1 className="text-xl font-semibold">Virtual Assistants</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={imagesPath.Navbar.searchIcon}
            alt="Search"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
          <input
            type="text"
            placeholder="Search Assistant"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-customBlue text-white"
          />
        </div>
        <button
          className="bg-blue-600 text-white p-2 rounded-md"
          onClick={openAddModal}
        >
          <img src={imagesPath.Navbar.addIcon} alt="Add" className="w-4 h-4" />
        </button>
        <img
          src={imagesPath.Navbar.notificationIcon}
          alt="Notifications"
          className="w-6 h-6"
        />
        <img
          src={imagesPath.Navbar.avatarIcon}
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
