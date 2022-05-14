import React from "react";

const DarkButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="font-bold rounded-md hover:scale-110 hover:shadow-lg active:scale-100 active:shadow-none transition-all text-cyan-100 text-xl px-8 py-2 bg-cyan-900"
    >
      {children}
    </button>
  );
};

export default DarkButton;
