import React from "react";

const Progress = ({ children, classname = "", ...props }) => {
  return (
    <div>
      <div
        className={`absolute text-sm  xl:text-lg text-white/50 ${classname}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Progress;
