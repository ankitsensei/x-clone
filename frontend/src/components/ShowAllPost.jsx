import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Spinner from "./Spinner";
// Icons
import { BiPhotoAlbum } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

const ShowAllPost = ({ posts, setPosts }) => {
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = (id) => {
    console.log("Delete");
    if (!id) return;
    axios
      .delete(`http://localhost:5555/delete/${id}`)
      .then(() => {
        setPosts((prev) => prev.filter((post) => post._id !== id));
        setMenu(null);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts
            ?.filter(Boolean)
            .slice()
            .reverse()
            .map((post, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 items-start justify-center p-2 border-t border-zinc-700"
              >
                <div className="flex items-center justify-between w-full relative">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg"
                      alt="dp"
                      className="w-10 rounded-full"
                    />
                    <div className="flex gap-2">
                      <p className="text-sm font-bold">Ankit Bhagat</p>
                      <p className="text-sm font-light text-zinc-400">
                        @webdevankit
                      </p>
                    </div>
                  </div>
                  <CiMenuKebab
                    className="rotate-90 text-zinc-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenu(menu === index ? null : index);
                    }}
                  />
                  {menu === index && (
                    <div
                      ref={menuRef}
                      className="absolute top-0 right-0 bg-black border border-zinc-400 rounded-lg list-none h-16 w-20 flex flex-col items-start justify-center gap-3 px-2"
                    >
                      <li onClick={() => handleDelete(post._id)}>Delete</li>
                      <li>Edit</li>
                    </div>
                  )}
                </div>
                <div className="px-13 -mt-5 flex flex-col gap-2">
                  <p className="">{post.text}</p>
                  {post.media && (
                    <img
                      src={`data:image/jpeg;base64,${post.media}`}
                      alt="#"
                      className="w-full rounded-2xl"
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllPost;
