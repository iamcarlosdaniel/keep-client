import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Toast = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div
      className={`toast flex items-center justify-between p-4 px-5 rounded-none shadow-lg border border-gray-300`}
    >
      <div className="flex items-start justify-start gap-2 ">
        <BsCheckCircle className="bi bi-check-circle text-lg text-green-500 mt-1" />
        <div className="flex flex-col ">
          <span>{message}</span>
          <span className="text-sm text-gray-600">Today 10:34</span>{" "}
          {/* Span más pequeño */}
        </div>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-gray-700 hover:text-gray-900"
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default Toast;
