import React from "react";

const Content = ({ children }) => {
  return (
    <div className="max-w-[1440px] bg-black/50 w-full md:w-11/12 mx-auto mt-0 sm:mt-20 h-full p-4 md:p-8 overflow-auto">
      {children}
    </div>
  );
};

export default Content;
