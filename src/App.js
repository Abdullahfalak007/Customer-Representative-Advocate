// import React, { useState } from "react";
// import SuperAdminSidebar from "./components/SuperAdminSidebar";
// import UserSidebar from "./components/UserSidebar";
// import VirtualAssistantsPage from "./pages/VirtualAssistantsPage";
// import VoiceAssistantPage from "./pages/VoiceAssistantPage";

// const App = () => {
//   const [selectedPage, setSelectedPage] = useState("Dashboard");
//   const isSuperAdmin = true; // Change this to toggle between super admin and user

//   return (
//     <div className="flex h-screen">
//       {isSuperAdmin ? (
//         <SuperAdminSidebar setSelectedPage={setSelectedPage} />
//       ) : (
//         <UserSidebar setSelectedPage={setSelectedPage} />
//       )}
//       {selectedPage === "Virtual Assistants" && <VirtualAssistantsPage />}
//       {selectedPage === "Voice Assistant" && <VoiceAssistantPage />}
//       {/* Add other page conditions as needed */}
//     </div>
//   );
// };

// export default App;

import React from "react";

import VoiceAssistantPage from "./pages/VoiceAssistantPage";
import VirtualAssistantsPage from "./pages/VirtualAssistantsPage";
import CallHistoryPage from "./pages/CallHistoryPage";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* <VoiceAssistantPage /> */}
      <VirtualAssistantsPage />
      {/* <CallHistoryPage /> */}
    </div>
  );
};

export default App;
