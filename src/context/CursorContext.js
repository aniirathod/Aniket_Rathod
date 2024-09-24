import { createContext, useContext } from "react";

export const cursorContext = createContext();

export const useCursorContext = () => useContext(cursorContext);
