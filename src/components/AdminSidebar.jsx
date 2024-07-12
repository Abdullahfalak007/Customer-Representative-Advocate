import React, { useState } from "react";
import adminSidebarMenuItems from "../data/adminSidebarMenuItems.json";
import imagesPath from "../data/imagesPath.json";

const AdminSidebar = ({ setSelectedPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getIconPath = (iconPath, isSelected) => {
    const iconType = isSelected ? "black" : "white";
    if (imagesPath.AdminSidebar[iconPath]) {
      return imagesPath.AdminSidebar[iconPath][iconType];
    }
    return ""; // Fallback in case the icon path does not exist
  };

  const handleMenuItemClick = (index, page) => {
    setSelectedItem(index);
    setSelectedPage(page);
  };

  return (
    <div className="h-full w-[19.375rem] bg-customBlue text-white py-4">
      <img
        src={imagesPath.Signup.logo}
        alt="Logo"
        className="w-46 h-18 mb-4 ml-[-2rem] mt-[-2.2rem]"
      />
      <ul className="mt-[3rem]">
        {adminSidebarMenuItems.map((item, index) => {
          const isSelected = selectedItem === index;
          return (
            <li
              key={index}
              className={`flex items-center p-2 cursor-pointer px-8 my-8 ${
                isSelected ? "bg-white text-black" : "hover:bg-blue-700"
              }`}
              onClick={() => handleMenuItemClick(index, item.text)}
            >
              <img
                src={getIconPath(item.icon, isSelected)}
                alt={item.text}
                className="w-6 h-6 mr-2"
              />
              <span className={isSelected ? "text-black" : ""}>
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminSidebar;