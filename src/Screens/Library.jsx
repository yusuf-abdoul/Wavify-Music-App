import React, { useState, useEffect } from "react";
import APIKit from "../Spotify";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="flex flex-col items-center h-screen w-full p-4 overflow-y-auto">
      <div className="flex flex-wrap justify-between">
        {playlists?.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
            className="relative w-[15%] h-[100%] rounded-2xl bg-gradient-to-br from-blue-900 via-gray-800 to-transparent border border-gray-700 p-[1%] mb-4 cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <img
              src={playlist.images[0].url}
              className="w-full aspect-square rounded-xl"
              alt="Playlist-Art"
            />
            <p className="text-white font-bold text-base mt-2 truncate">{playlist.name}</p>
            <p className="text-gray-400 text-sm">{playlist.tracks.total} Songs</p>
            <div className="absolute bottom-0 right-0 w-full h-1/3 rounded-2xl bg-gradient-to-t from-gray-900 to-transparent flex items-end justify-end p-3 opacity-0 transition-opacity duration-500 hover:opacity-100">
              <AiFillPlayCircle size={35} className="text-orange-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
