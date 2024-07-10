// src/components/VirtualAssistants.jsx
import React, { useState } from "react";
import imagesPath from "../data/imagesPath.json";
import virtualAssistantsData from "../data/virtualAssistantsData.json";
import Modal from "./Modal";

const VirtualAssistants = ({
  openModal,
  isModalOpen,
  closeModal,
  saveAssistant,
  formData,
  setFormData,
  isEditMode,
}) => {
  const [data, setData] = useState(virtualAssistantsData);
  const [sortOrder, setSortOrder] = useState({ key: "", order: "asc" });

  const sortData = (key) => {
    const order =
      sortOrder.key === key && sortOrder.order === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortOrder({ key, order });
  };

  const deleteEntry = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleSave = () => {
    if (isEditMode) {
      // Update existing entry
      const updatedData = data.map((entry) =>
        entry.id === formData.id ? formData : entry
      );
      setData(updatedData);
    } else {
      // Add new entry
      const newEntry = { ...formData, id: data.length + 1 };
      setData([...data, newEntry]);
    }
    closeModal();
  };

  return (
    <div className="p-4 h-full">
      <div className="overflow-auto h-full">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-customBlue text-white sticky top-0 z-10">
            <tr>
              <th className="py-2 px-4 text-left w-12">
                <div className="flex items-center">
                  <input type="checkbox" className="form-checkbox-header" />
                </div>
              </th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  ID
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("id")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("id")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  Virtual Assistant
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("name")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("name")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  Email
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("email")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("email")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  Number
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("number")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("number")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((assistant, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 hover:bg-gray-100"
              >
                <td className="py-2 px-4 w-12">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="py-2 px-4">{assistant.id}</td>
                <td className="py-2 px-4">{assistant.name}</td>
                <td className="py-2 px-4">{assistant.email}</td>
                <td className="py-2 px-4">{assistant.number}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => openModal(assistant)}
                  >
                    <img
                      src={imagesPath.VirtualAssistantTable.editIcon}
                      alt="Edit"
                      className="w-5 h-5"
                    />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteEntry(index)}
                  >
                    <img
                      src={imagesPath.VirtualAssistantTable.recycleBinIcon}
                      alt="Delete"
                      className="w-5 h-5"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        formData={formData}
        setFormData={setFormData}
        isEditMode={isEditMode}
      />
    </div>
  );
};

export default VirtualAssistants;
