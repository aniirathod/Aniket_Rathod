import { useState } from "react";
import React from "react";
import { NavBar, Loader, CustomCursor } from "./components/index.js";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  // smooth scrolling

  const scroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.09,
    },
  });

  // setting loading
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <CustomCursor />
      {loading ? (
        <div className="w-full min-h-screen text-white bg-blackish font-poppins">
          <Loader onLoadingComplete={handleLoadingComplete} />
        </div>
      ) : (
        <div className="w-full min-h-screen text-white bg-blackish font-poppins ">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default App;
