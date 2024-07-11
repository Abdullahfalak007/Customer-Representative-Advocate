// // src/pages/VoiceAssistantPage.jsx
// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import UserSidebar from "../components/UserSidebar";
// import imagesPath from "../data/imagesPath.json";
// import "../index.css"; // Ensure this import is present for custom scrollbar styles

// const VoiceAssistantPage = () => {
//   const [userInput, setUserInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [selectedPage, setSelectedPage] = useState("Voice Assistants");

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSend = () => {
//     if (userInput.trim()) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { id: prevMessages.length + 1, text: userInput },
//       ]);
//       setUserInput("");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <UserSidebar setSelectedPage={setSelectedPage} />
//       <div className="flex-1 flex flex-col">
//         <div className="flex-shrink-0">
//           <Navbar
//             title="Voice Assistants"
//             showAddIcon={false}
//             showSearchBar={false}
//           />
//         </div>
//         <div className="flex-1 p-4 overflow-auto">
//           <div
//             className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar"
//             style={{
//               backgroundImage: `url(${imagesPath.Chat.clientBackground})`,
//               backgroundSize: "cover",
//               width: "65.125rem",
//               height: "34.0625rem",
//               borderRadius: "0.9375rem",
//             }}
//           >
//             <div className="relative mb-8">
//               <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
//                 Client
//               </h3>
//               <div className="relative">
//                 <p className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal">
//                   CyberGen is a company that specializes in providing
//                   comprehensive IT solutions and advanced technology tailored
//                   for businesses. We offer a range of services including Cyber
//                   Security Solutions, Software Development, Marketing Services,
//                   Managed Services, Professional Services, Strategic Staffing,
//                   Technical Training, and Artificial Intelligence.
//                 </p>
//                 <div className="absolute bottom-[-0.8125rem] left-1/2 transform -translate-x-1/2">
//                   <button className="bg-[#E3EDFF] text-customBlue rounded-full w-[5rem] h-[1.625rem] text-[#0771EF] font-poppins text-[0.68456rem] font-normal">
//                     Ask AI
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="relative mb-8 flex justify-end items-center">
//               <div className="text-right mr-4">
//                 <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
//                   User Name
//                 </h3>
//                 <p className="mt-2 p-4 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal">
//                   CyberGen is a company that specializes in providing
//                   comprehensive IT solutions...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal mt-2 ml-8">
//             AI Assistant
//           </h3>
//           {/* New AI Assistant Container */}
//           <div
//             className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar mt-2"
//             style={{
//               backgroundImage: `url(${imagesPath.Chat.aiAssistantBackground})`,
//               backgroundSize: "cover",
//               width: "65.125rem",
//               height: "16.9375rem",
//               borderRadius: "0.9375rem",
//             }}
//           >
//             <div className="relative">
//               <p className="text-[#333232] font-poppins text-base p-2 text-[0.937rem] ">
//                 CyberGen is a company that specializes in providing
//                 comprehensive IT solutions and advanced technology tailored for
//                 businesses. We offer a range of services including Cyber
//                 Security Solutions, Software Development, Marketing Services,
//                 Managed Services, Professional Services, Strategic Staffing,
//                 Technical Training, and Artificial Intelligence.
//               </p>
//               {messages.map((message) => (
//                 <div key={message.id} className="flex justify-end mt-2">
//                   <p className="text-[#333232] font-poppins text-base p-4 bg-white rounded-lg shadow">
//                     {message.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="relative mt-8">
//               <div className="relative mt-4 flex items-center">
//                 <input
//                   type="text"
//                   placeholder="Type your message..."
//                   value={userInput}
//                   onChange={handleInputChange}
//                   className="w-[55.5rem] h-[3.9375rem] flex-shrink-0 rounded-full bg-white p-4 shadow mr-4 text-[#333232] font-poppins text-[0.9375rem] font-normal"
//                 />
//                 <button
//                   className="bg-blue-500 text-white rounded-full p-4"
//                   onClick={handleSend}
//                 >
//                   <img
//                     src={imagesPath.Chat.sendIcon}
//                     alt="Send"
//                     className="w-6 h-6"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VoiceAssistantPage;

// src/pages/VoiceAssistantPage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserSidebar from "../components/UserSidebar";
import imagesPath from "../data/imagesPath.json";
import "../index.css"; // Ensure this import is present for custom scrollbar styles

const VoiceAssistantPage = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("Voice Assistants");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: userInput },
      ]);
      setUserInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen">
      <UserSidebar setSelectedPage={setSelectedPage} />
      <div className="flex-1 flex flex-col">
        <div className="flex-shrink-0">
          <Navbar
            title="Voice Assistants"
            showAddIcon={false}
            showSearchBar={false}
          />
        </div>
        <div className="flex-1 p-4 ">
          <div
            className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar"
            style={{
              backgroundImage: `url(${imagesPath.Chat.clientBackground})`,
              backgroundSize: "cover",
              width: "62.125rem",
              height: "34.0625rem",
              borderRadius: "0.9375rem",
            }}
          >
            <div className="relative mb-8">
              <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                Client
              </h3>
              <div className="relative">
                <p className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal">
                  CyberGen is a company that specializes in providing
                  comprehensive IT solutions and advanced technology tailored
                  for businesses. We offer a range of services including Cyber
                  Security Solutions, Software Development, Marketing Services,
                  Managed Services, Professional Services, Strategic Staffing,
                  Technical Training, and Artificial Intelligence.
                </p>
                <div className="absolute bottom-[-0.8125rem] left-1/2 transform -translate-x-1/2">
                  <button className="bg-[#E3EDFF] text-customBlue rounded-full w-[5rem] h-[1.625rem] text-[#0771EF] font-poppins text-[0.68456rem] font-normal">
                    Ask AI
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mb-8 flex justify-end items-center">
              <div className="text-right mr-4">
                <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                  User Name
                </h3>
                <p className="mt-2 p-4 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal">
                  CyberGen is a company that specializes in providing
                  comprehensive IT solutions...
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal mt-2 ml-8">
            AI Assistant
          </h3>
          {/* New AI Assistant Container */}
          <div
            className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar mt-2"
            style={{
              backgroundImage: `url(${imagesPath.Chat.aiAssistantBackground})`,
              backgroundSize: "cover",
              width: "62.125rem",
              height: "16.9375rem",
              borderRadius: "0.9375rem",
            }}
          >
            <div className="relative">
              <p className="text-[#333232] font-poppins text-base p-2 text-[0.937rem] ">
                CyberGen is a company that specializes in providing
                comprehensive IT solutions and advanced technology tailored for
                businesses. We offer a range of services including Cyber
                Security Solutions, Software Development, Marketing Services,
                Managed Services, Professional Services, Strategic Staffing,
                Technical Training, and Artificial Intelligence.
              </p>
              {messages.map((message) => (
                <div key={message.id} className="flex justify-end mt-2">
                  <p className="text-[#333232] font-poppins text-base p-4 bg-white rounded-lg shadow">
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative mt-8">
              <div className="relative mt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="w-[55.5rem] h-[3.9375rem] flex-shrink-0 rounded-full bg-white p-4 shadow mr-4 text-[#333232] font-poppins text-[0.9375rem] font-normal"
                />
                <button
                  className="bg-blue-500 text-white rounded-full p-4"
                  onClick={handleSend}
                >
                  <img
                    src={imagesPath.Chat.sendIcon}
                    alt="Send"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistantPage;
