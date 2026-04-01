import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const EditModal = ({ onClose, postId }) => {
  const [inputLength, setInputLength] = useState(0);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [existingMedia, setExistingMedia] = useState(""); // old media
  const fileInputRef = useRef(null);
  const mediaPreview = media ? URL.createObjectURL(media) : null;
  const [loading, setLoading] = useState(false);

  // For Input field
  const ref = useRef();
  const handleInput = () => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };
  // For closing the Modal
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleEditPost = () => {
    console.log(postId);
    const formData = new FormData();
    formData.append("text", text);
    if (media) {
      formData.append("media", media);
    } else {
      formData.append("media", existingMedia);
    }
    setLoading(true);
    axios
      .put(`http://localhost:5555/edit/${postId}`, formData)
      .then(() => {
        setLoading(false);
        // reset first
        setText("");
        setMedia(null);
        setExistingMedia("");
        onClose();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (!postId) return;

    // reset first
    setText("");
    setMedia(null);
    setExistingMedia("");

    axios
      .get(`http://localhost:5555/details/${postId}`)
      .then((res) => {
        setText(res.data.text);
        setExistingMedia(res.data.media);
      })
      .catch((err) => console.log(err));
  }, [postId]);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="w-124 h-fit bg-black border-2 border-red-400 backdrop-blur-sm flex flex-col items-center justify-center fixed top-13"
    >
      <button
        className="bg-white px-2 py-2 rounded-2xl text-black absolute top-2 right-2"
        onClick={onClose}
      >
        <IoCloseOutline />
      </button>
      <div className="h-full w-4/5 flex gap-2 bg-black">
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
            {mediaPreview ? (
              <img
                src={mediaPreview}
                alt="img"
                className="w-auto h-74 rounded-xl object-cover"
              />
            ) : existingMedia ? (
              <img
                src={`data:image/jpeg;base64,${existingMedia}`}
                alt="img"
                className="w-auto h-74 rounded-xl object-cover"
              />
            ) : null}
          </div>
          {/* Image input */}
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
              onClick={() => handleEditPost()}
              className={`px-4 py-1 font-semibold ${inputLength > 0 ? "bg-zinc-100" : "bg-zinc-400"} text-black rounded-full hover:bg-zinc-200`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
