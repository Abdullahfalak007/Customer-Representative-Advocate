// // // src/pages/VirtualAssistantsPage.jsx
// // import React from "react";
// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";
// // import VirtualAssistants from "../components/VirtualAssistants";

// // const VirtualAssistantsPage = () => {
// //   return (
// //     <div className="flex h-screen">
// //       <Sidebar />
// //       <div className="flex-1 flex flex-col">
// //         <Navbar />
// //         <div className="p-4 flex-1 overflow-auto">
// //           <VirtualAssistants />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VirtualAssistantsPage;

// // src/pages/VirtualAssistantsPage.jsx
// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import VirtualAssistants from "../components/VirtualAssistants";

// const VirtualAssistantsPage = () => {
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const [formData, setFormData] = React.useState({
//     id: null,
//     name: "",
//     number: "",
//     email: "",
//     password: "",
//   });
//   const [isEditMode, setIsEditMode] = React.useState(false);

//   const openModal = (assistant = null) => {
//     if (assistant) {
//       setFormData(assistant);
//       setIsEditMode(true);
//     } else {
//       setFormData({ id: null, name: "", number: "", email: "", password: "" });
//       setIsEditMode(false);
//     }
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const saveAssistant = () => {
//     // Save logic goes here
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar openAddModal={() => openModal()} />
//         <div className="p-4 flex-1 overflow-auto">
//           <VirtualAssistants
//             openModal={openModal}
//             isModalOpen={isModalOpen}
//             closeModal={closeModal}
//             saveAssistant={saveAssistant}
//             formData={formData}
//             setFormData={setFormData}
//             isEditMode={isEditMode}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VirtualAssistantsPage;

// src/pages/VirtualAssistantsPage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import VirtualAssistants from "../components/VirtualAssistants";

const VirtualAssistantsPage = ({ isPageSelected }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    id: null,
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [isEditMode, setIsEditMode] = React.useState(false);

  const openModal = (assistant = null) => {
    if (assistant) {
      setFormData(assistant);
      setIsEditMode(true);
    } else {
      setFormData({ id: null, name: "", number: "", email: "", password: "" });
      setIsEditMode(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveAssistant = () => {
    // Save logic goes here
  };

  if (!isPageSelected) return null;

  return (
    <div className="flex-1 flex flex-col">
      <Navbar openAddModal={() => openModal()} />
      <div className="p-4 flex-1 overflow-auto">
        <VirtualAssistants
          openModal={openModal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          saveAssistant={saveAssistant}
          formData={formData}
          setFormData={setFormData}
          isEditMode={isEditMode}
        />
      </div>
    </div>
  );
};

export default VirtualAssistantsPage;
