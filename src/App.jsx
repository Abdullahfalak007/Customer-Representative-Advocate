import { useState } from "react";
import VoiceAssistantPage from "./pages/VoiceAssistantPage";
import VirtualAssistantsPage from "./pages/VirtualAssistantsPage";
import CallHistoryPage from "./pages/CallHistoryPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import OTP from "./pages/OTP";
import VirtualAssistantPageForAdmin from "./pages/VirtualAssistantPageForAdmin";
import ClientsPageForAdmin from "./pages/ClientsPageForAdmin";
import KnowledgeBasePageForAdmin from "./pages/KnowledgeBasePageForAdmin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <OTP /> */}
      {/* <VirtualAssistantPageForAdmin /> */}
      {/* <AdminDashboardPage /> */}
      {/* <ClientsPageForAdmin /> */}
      {/* <KnowledgeBasePageForAdmin /> */}
      <VoiceAssistantPage />
      {/* <VirtualAssistantsPage /> */}
      {/* <CallHistoryPage /> */}
    </div>
  );
}

export default App;
