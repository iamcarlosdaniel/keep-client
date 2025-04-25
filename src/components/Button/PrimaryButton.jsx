import React from "react";

const PrimaryButton = ({ text, className, onClick, icon, type }) => {
  return (
    <button
      className={`group flex items-center justify-center gap-1 text-blue-600 border border-blue-600 px-4 py-2 rounded-none hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white transition duration-300 ease-in-out focus:outline-none ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
      {icon && (
        <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-active:translate-x-1 -mb-0.5">
          {icon}
        </span>
      )}
    </button>
  );
};

export default PrimaryButton;
