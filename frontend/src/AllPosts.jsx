import React, { useRef } from "react";
import { BiPhotoAlbum } from "react-icons/bi";

const Posts = () => {
  const ref = useRef();

  const handleInput = () => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };
  return (
    <div>
      <div className="text-zinc-400 border-zinc-700 border-b p-2 flex justify-evenly items-center h-14">
        <p className="text-zinc-100">For you</p>
        <p>Following</p>
      </div>
      {/* Post */}
      <div className="h-full pt-2 px-4 flex gap-2">
        <img
          src="https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg"
          alt="dp"
          className="w-10 h-10 rounded-full mt-2"
        />
        <div className="w-full h-fit pr-2">
          <textarea
            ref={ref}
            onInput={handleInput}
            placeholder="What's happening?"
            className="mt-4 text-lg outline-none w-full resize-none overflow-hidden"
            rows={1}
          />
          <div className="w-full border-t border-zinc-700 mt-10 flex py-4 items-center justify-between">
            <BiPhotoAlbum className="w-5 h-5 text-blue-400" />
            <button className="px-4 py-1 font-semibold bg-zinc-400 text-black rounded-full hover:bg-zinc-200">
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center p-2 border-t border-zinc-700">
        <img
          src="https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg"
          alt="dp"
          className="w-10 rounded-full"
        />
        <div className="flex gap-2">
          <p className="text-sm font-bold">Ankit Bhagat</p>
          <p className="text-sm font-light text-zinc-400">@webdevankit</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
