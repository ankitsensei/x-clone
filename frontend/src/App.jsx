import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";

const App = () => {
  return (
    <div className="w-full flex justify-center items-start h-screen">
      <div className="w-18 lg:w-60 border-r border-zinc-800 h-full">
        <Navbar />
      </div>
      <div className="w-124 border-s border-zinc-800 h-screen">
        <Home />
      </div>
      <div className="w-1/5 border-s border-zinc-800 h-screen"></div>
    </div>
  );
};

export default App;
