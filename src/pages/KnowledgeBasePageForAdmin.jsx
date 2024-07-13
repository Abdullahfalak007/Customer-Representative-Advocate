import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

const KnowledgeBasePageForAdmin = () => {
  const [selectedPage, setSelectedPage] = useState("Knowledge Base");

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar setSelectedPage={setSelectedPage} className="h-full" />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title={<span className="text-customBlue">Knowledge Base</span>}
            showAddIcon={false}
            showSearchBar={false}
            showSecondSearchBar={false}
          />
        </div>
        <div className="flex-1 p-4">
          {/* Content for the Knowledge Base page */}
          <h2 className="text-2xl font-bold">Knowledge Base Page Content</h2>
          <p>Here you can manage the knowledge base.</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBasePageForAdmin;
