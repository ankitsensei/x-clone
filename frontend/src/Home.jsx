import React from "react";
import ShowAllPost from "./components/ShowAllPost";
import CreatePost from "./components/CreatePost";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-zinc-400 border-zinc-700 border-b p-2 flex justify-evenly items-center h-14">
        <p className="text-zinc-100">For you</p>
        <p>Following</p>
      </div>
      {/* Create Post */}
      <CreatePost />
      {/* Show posts */}
      <ShowAllPost/>
    </div>
  );
};

export default Home;
