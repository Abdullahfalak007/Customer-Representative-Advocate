import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import KnowledgeBaseCard from "../components/KnowledgeBaseCard";
import knowledgeBaseData from "../data/knowledgeBaseData.json"; // Sample data

const KnowledgeBasePageForAdmin = () => {
  const [selectedPage, setSelectedPage] = useState("Knowledge Base");

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar setSelectedPage={setSelectedPage} className="h-full" />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title="Knowledge Base"
            showAddIcon={true}
            showSearchBar={true}
            searchBarPlaceholder="Search Company"
          />
        </div>
        <div className="flex-1 p-4 grid grid-cols-3 gap-4">
          {knowledgeBaseData.map((item) => (
            <KnowledgeBaseCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBasePageForAdmin;
