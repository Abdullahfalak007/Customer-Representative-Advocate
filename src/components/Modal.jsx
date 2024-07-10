// src/components/Modal.jsx
import React, { useRef, useEffect } from "react";
import imagesPath from "../data/imagesPath.json";
import "../index.css";

const Modal = ({ isOpen, onClose, onSave, formData, setFormData }) => {
  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="relative bg-white flex-shrink-0"
        style={{
          width: "34.625rem",
          height: "36.375rem",
          borderRadius: "1.81856rem",
          background: "#FFF",
        }}
      >
        <div
          className="bg-customBlue rounded-t-lg flex items-center justify-center relative"
          style={{
            height: "5.20994rem",
            borderRadius: "1.81856rem 1.81856rem 0 0",
          }}
        >
          <img
            src={imagesPath.Modal.icon}
            alt="Icon"
            className="absolute"
            style={{
              width: "11rem",
              height: "10.07588rem",
              top: "2.5rem",
            }}
          />
        </div>
        <div className="text-center mt-32">
          <h2 className="text-xl font-poppinsRegular font-semibold">
            Edit Virtual Assistant
          </h2>
        </div>
        <form className="px-8 pt-12">
          <div className="mb-4 flex items-center">
            <label
              className="text-left mr-8"
              htmlFor="name"
              style={{
                color: "#8C8C8C",
                fontFamily: "Inter",
                fontSize: "0.8125rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "6rem",
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              className="text-left mr-8"
              htmlFor="number"
              style={{
                color: "#8C8C8C",
                fontFamily: "Inter",
                fontSize: "0.8125rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "6rem",
              }}
            >
              Number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              className="text-left mr-8"
              htmlFor="email"
              style={{
                color: "#8C8C8C",
                fontFamily: "Inter",
                fontSize: "0.8125rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "6rem",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              className="text-left mr-8"
              htmlFor="password"
              style={{
                color: "#8C8C8C",
                fontFamily: "Inter",
                fontSize: "0.8125rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "6rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onSave}
              className="bg-blue-500 text-white px-6 py-2 rounded-full mr-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
