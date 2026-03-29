import React, { useState, useRef } from "react";
import Spinner from "./Spinner";
import { BiPhotoAlbum } from "react-icons/bi";
import axios from "axios";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");
  const [inputLength, setInputLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const mediaPreview = media ? URL.createObjectURL(media) : null;
  const fileInputRef = useRef(null);

  const handleSavePost = () => {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("media", media);
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

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  console.log(mediaPreview);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-full w-full pt-2 px-4 flex gap-2">
          <img
            src="https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg"
            alt="dp"
            className="w-10 h-10 rounded-full mt-2"
          />
          <div className="w-full h-fit pr-2">
            <textarea
              type="text"
              ref={ref}
              onInput={handleInput}
              placeholder="What's happening?"
              className="mt-4 text-lg outline-none w-full resize-none overflow-hidden"
              rows={1}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setInputLength(e.target.value.length);
              }}
            />
            <div className="flex flex-col justify-center items-center mt-4">
              {mediaPreview && (
                <img
                  src={mediaPreview}
                  alt="img"
                  className="w-auto h-74 rounded-xl object-cover"
                />
              )}
            </div>
            <div className="w-full border-t border-zinc-700 mt-10 flex py-4 items-center justify-between">
              <button>
                <BiPhotoAlbum
                  className="w-5 h-5 text-blue-400"
                  onClick={() => handleIconClick()}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => setMedia(e.target.files[0])}
                  className="hidden"
                />
              </button>
              <button
                onClick={() => handleSavePost()}
                className={`px-4 py-1 font-semibold ${inputLength > 0 ? "bg-zinc-100" : "bg-zinc-400"} text-black rounded-full hover:bg-zinc-200`}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
