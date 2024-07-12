// import React from "react";
// import imagesPath from "../data/imagesPath.json";
// import "../index.css"; // Ensure this import is present to include custom CSS

// const Navbar = ({
//   title,
//   showAddIcon,
//   showSearchBar,
//   showSecondSearchBar,
//   searchBarPlaceholder,
//   secondSearchBarPlaceholder,
//   openAddModal,
// }) => {
//   return (
//     <div className="bg-white p-4 flex justify-between items-center w-full">
//       <h1 className="mt-6 text-[#595959] font-poppins font-semibold text-[1.523rem]">
//         {title}
//       </h1>
//       <div className="flex items-center space-x-4 mt-6">
//         {showSearchBar && (
//           <div className="relative">
//             <img
//               src={imagesPath.Navbar.searchIcon}
//               alt="Search"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//             />
//             <input
//               type="text"
//               placeholder={searchBarPlaceholder || "Search Assistant"}
//               className="w-[12.875rem] h-[2.25rem] pl-10 pr-4 py-0 border border-gray-300 rounded-md focus:outline-none bg-customBlue text-white placeholder-custom"
//               style={{
//                 height: "2.25rem",
//                 lineHeight: "2.25rem",
//               }}
//             />
//           </div>
//         )}
//         {showSecondSearchBar && (
//           <div className="relative">
//             <img
//               src={imagesPath.Navbar.searchIcon}
//               alt="Search"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//             />
//             <input
//               type="text"
//               placeholder={secondSearchBarPlaceholder || "Search"}
//               className="w-[12.875rem] h-[2.25rem] pl-10 pr-4 py-0 border border-gray-300 rounded-md focus:outline-none bg-customBlue text-white placeholder-custom"
//               style={{
//                 height: "2.25rem",
//                 lineHeight: "2.25rem",
//               }}
//             />
//           </div>
//         )}
//         {showAddIcon && (
//           <button onClick={openAddModal}>
//             <img
//               src={imagesPath.Navbar.addIcon}
//               alt="Add"
//               className="w-[2.125rem] h-[2.125rem]"
//             />
//           </button>
//         )}
//         <img
//           src={imagesPath.Navbar.notificationIcon}
//           alt="Notifications"
//           className="w-[2.125rem] h-[2.125rem]"
//         />
//         <img
//           src={imagesPath.Navbar.avatarIcon}
//           alt="Avatar"
//           className="w-[2.125rem] h-[2.125rem] rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import imagesPath from "../data/imagesPath.json";
import "../index.css"; // Ensure this import is present to include custom CSS

const Navbar = ({
  title,
  showAddIcon,
  showSearchBar,
  showSecondSearchBar,
  searchBarPlaceholder,
  secondSearchBarPlaceholder,
  openAddModal,
  titleColor = "text-[#595959]", // Default color
}) => {
  return (
    <div className="bg-white p-4 flex justify-between items-center w-full">
      <h1
        className={`mt-6 font-poppins font-semibold text-[1.523rem] ${titleColor}`}
      >
        {title}
      </h1>
      <div className="flex items-center space-x-4 mt-6">
        {showSearchBar && (
          <div className="relative">
            <img
              src={imagesPath.Navbar.searchIcon}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder={searchBarPlaceholder || "Search"}
              className="w-[12.875rem] h-[2.25rem] pl-10 pr-4 py-0 border border-gray-300 rounded-md focus:outline-none bg-customBlue text-white placeholder-custom"
              style={{
                height: "2.25rem",
                lineHeight: "2.25rem",
              }}
            />
          </div>
        )}
        {showSecondSearchBar && (
          <div className="relative">
            <img
              src={imagesPath.Navbar.searchIcon}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder={secondSearchBarPlaceholder || "Search"}
              className="w-[12.875rem] h-[2.25rem] pl-10 pr-4 py-0 border border-gray-300 rounded-md focus:outline-none bg-customBlue text-white placeholder-custom"
              style={{
                height: "2.25rem",
                lineHeight: "2.25rem",
              }}
            />
          </div>
        )}
        {showAddIcon && (
          <button onClick={openAddModal}>
            <img
              src={imagesPath.Navbar.addIcon}
              alt="Add"
              className="w-[2.125rem] h-[2.125rem]"
            />
          </button>
        )}
        <img
          src={imagesPath.Navbar.notificationIcon}
          alt="Notifications"
          className="w-[2.125rem] h-[2.125rem]"
        />
        <img
          src={imagesPath.Navbar.avatarIcon}
          alt="Avatar"
          className="w-[2.125rem] h-[2.125rem] rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
