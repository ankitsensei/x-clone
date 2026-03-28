import React from "react";
import Navbar from "./components/Navbar";
import AllPosts from "./AllPosts";

const App = () => {
  return (
    <div className="px-60 w-full flex items-start">
      <div className="w-1/5 border-r border-zinc-800 h-screen">
        <Navbar />
      </div>
      <div className="w-3/6 border-s border-zinc-800 h-screen">
        <AllPosts />
      </div>
      <div className="w-1/5 border-s border-zinc-800 h-screen"></div>
    </div>
  );
};

export default App;
