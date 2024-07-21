import React from "react";

import VoiceAssistantPage from "./pages/VoiceAssistantPage";
import VirtualAssistantsPage from "./pages/VirtualAssistantsPage";
import CallHistoryPage from "./pages/CallHistoryPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import ClientsPageForAdmin from "./pages/ClientsPageForAdmin";
import VirtualAssistantPageForAdmin from "./pages/VirtualAssistantPageForAdmin";
import KnowledgeBasePageForAdmin from "./pages/KnowledgeBasePageForAdmin";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* <VoiceAssistantPage /> */}
      {/* <VirtualAssistantsPage /> */}
      {/* <CallHistoryPage /> */}
      {/* <AdminDashboardPage /> */}
      {/* <ClientsPageForAdmin /> */}
      {/* <VirtualAssistantPageForAdmin /> */}
      {/* <KnowledgeBasePageForAdmin /> */}
      <Login />
    </div>
  );
};

export default App;
