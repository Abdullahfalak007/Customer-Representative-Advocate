import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

const VirtualAssistantPageForAdmin = () => {
  const [selectedPage, setSelectedPage] = useState("Virtual Assistants");

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar setSelectedPage={setSelectedPage} className="h-full" />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title={<span className="text-customBlue">Virtual Assistants</span>}
            showAddIcon={false}
            showSearchBar={false}
            showSecondSearchBar={false}
          />
        </div>
        <div className="flex-1 p-4">
          {/* Content for the Virtual Assistants page */}
          <h2 className="text-2xl font-bold">
            Virtual Assistants Page Content
          </h2>
          <p>Here you can manage all the virtual assistants.</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistantPageForAdmin;
