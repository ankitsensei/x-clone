import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowAllPost from "./components/ShowAllPost";
import CreatePost from "./components/CreatePost";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://localhost:5555/")
      .then((res) => setPosts(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="text-zinc-400 border-zinc-700 border-b p-2 flex justify-evenly items-center h-14">
        <p className="text-zinc-100">For you</p>
        <p>Following</p>
      </div>
      {/* Create Post */}
      <CreatePost fetchPosts={fetchPosts} />
      {/* Show posts */}
      <ShowAllPost posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default Home;
