import React from "react";

const Content = ({ children }) => {
  return (
    <div className="bg-black/50 w-11/12 mx-auto mt-20 h-full overflow-auto p-8">
      {children}
    </div>
  );
};

export default Content;
