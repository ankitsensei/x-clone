import React, { useEffect, useState } from "react";
import { BiPhotoAlbum } from "react-icons/bi";
import axios from "axios";
import Spinner from "./Spinner";

const ShowAllPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/")
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts
            .slice()
            .reverse()
            .map((post, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 items-start justify-center p-2 border-t border-zinc-700"
              >
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
                <div className="px-13 -mt-5 flex flex-col gap-2">
                  <p className="">{post.text}</p>
                  <img
                    src={`data:image/jpeg;base64,${post.media}`}
                    alt="#"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllPost;
