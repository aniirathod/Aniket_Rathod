import React, { useState } from "react";
import { cursorContext } from "./CursorContext";

const CursorProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onCursorEnter = () => setIsHovered(true);
  const onCursorLeave = () => setIsHovered(false);

  return (
    <cursorContext.Provider value={{ isHovered, onCursorEnter, onCursorLeave }}>
      {children}
    </cursorContext.Provider>
  );
};

export default CursorProvider;
