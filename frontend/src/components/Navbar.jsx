import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
// Home
import { GoHome, GoHomeFill } from "react-icons/go";
// Bookmark
import { FiBookmark } from "react-icons/fi";
import { RiBookmarkFill } from "react-icons/ri";
// Profile
import { IoPersonSharp, IoPersonOutline } from "react-icons/io5";

import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  const [clickHome, setClickHome] = useState(true);
  const [clickBookMark, setClickBookMark] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);
  return (
    <div className="flex flex-col justify-between items-start h-screen py-3">
      <div className="flex flex-col gap-10 items-start">
        <BsTwitterX className="text-2xl mx-1" />
        <ul className="flex flex-col gap-8">
          <li
            className="navList"
            onClick={() => {
              setClickHome(true);
              setClickBookMark(false);
              setClickProfile(false);
            }}
          >
            {clickHome ? (
              <GoHomeFill className="text-3xl" />
            ) : (
              <GoHome className="text-3xl" />
            )}
            <span>Home</span>
          </li>
          <li
            className="navList"
            onClick={() => {
              setClickHome(false);
              setClickBookMark(true);
              setClickProfile(false);
            }}
          >
            {clickBookMark ? (
              <RiBookmarkFill className="text-3xl" />
            ) : (
              <FiBookmark className="text-3xl" />
            )}
            <span>Bookmarks</span>
          </li>
          <li
            className="navList"
            onClick={() => {
              setClickHome(false);
              setClickBookMark(false);
              setClickProfile(true);
            }}
          >
            {clickProfile ? (
              <IoPersonSharp className="text-3xl" />
            ) : (
              <IoPersonOutline className="text-3xl" />
            )}
            <span>Profile</span>
          </li>
        </ul>
        <button className="px-24 py-3 bg-white text-black rounded-full hover:bg-zinc-200">
          Post
        </button>
      </div>
      <div className="flex items-center justify-between w-full pr-6 mb-3">
        <div className="flex gap-3 items-center">
          <img
            src="https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg"
            alt="dp"
            className="w-10 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">Ankit Bhagat</p>
            <p className="text-sm font-light text-zinc-400">@webdevankit</p>
          </div>
        </div>
        <CiMenuKebab className="rotate-90" />
      </div>
    </div>
  );
};

export default Navbar;
