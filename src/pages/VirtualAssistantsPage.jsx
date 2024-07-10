// src/pages/VirtualAssistantsPage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import VirtualAssistants from "../components/VirtualAssistants";

const VirtualAssistantsPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1 overflow-auto">
          <VirtualAssistants />
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistantsPage;
