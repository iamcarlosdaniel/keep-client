import React from "react";

const PrimaryInput = ({ type = "text", placeholder, onChange }) => {
  return (
    <div className=" h-14 w-full text-md relative ">
      <input
        type={type}
        onChange={onChange}
        placeholder=""
        className="w-full h-full px-4 pt-3 border border-gray-300 rounded-none outline-none bg-transparent text-black peer focus:ring-4 focus:ring-blue-300 focus-within:border-blue-600 transition duration-200 ease-in-out placeholder-transparent"
        autoComplete="off"
      />
      <label className="-z-1 text-xs text-gray-800 absolute left-4 top-2 transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
        {placeholder}
      </label>
    </div>
  );
};

export default PrimaryInput;
