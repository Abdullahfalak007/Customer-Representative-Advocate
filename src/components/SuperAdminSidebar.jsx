import React, { useState } from "react";
import sidebarMenuItems from "../data/superAdminSidebarMenuItems.json";
import imagesPath from "../data/imagesPath.json";

const SuperAdminSidebar = ({ setSelectedPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getIconPath = (iconPath, isSelected) => {
    const pathParts = iconPath.split(".");
    const category = pathParts[0];
    const iconName = pathParts[1];
    const iconType = isSelected ? "black" : "white";
    return imagesPath[category][iconName][iconType];
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
        {sidebarMenuItems.map((item, index) => {
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

export default SuperAdminSidebar;