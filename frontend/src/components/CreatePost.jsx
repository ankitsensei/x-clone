import React, { useState, useRef } from "react";
import Spinner from "./Spinner";
import { BiPhotoAlbum } from "react-icons/bi";
import axios from "axios";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");
  const [loading, setLoading] = useState(false);
  const mediaPreview = media ? URL.createObjectURL(media) : null;

  const handleSavePost = () => {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("photo", image);
    setLoading(true);
    axios
      .post("http://localhost:5555/", formData)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const ref = useRef();

  const handleInput = () => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };
  return (
    <div>
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
    </div>
  );
};

export default CreatePost;
