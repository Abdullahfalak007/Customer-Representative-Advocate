// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import VirtualAssistantsPage from "./pages/VirtualAssistantsPage";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar setSelectedPage={setSelectedPage} />
      {selectedPage === "Virtual Assistants" && (
        <VirtualAssistantsPage
          isPageSelected={selectedPage === "Virtual Assistants"}
        />
      )}
    </div>
  );
};

export default App;
