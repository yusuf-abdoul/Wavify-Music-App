import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import apiClient from "../Spotify";
import Songcard from "../Components/Songcard";
import Queue from "../Components/Queue";
import AudioPlayer from "../Components/AudioPlayer";
import Widgets from "../Components/Widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="flex h-screen p-4">
      {/* Left Player Body */}
      <div className="w-2/3 mr-2">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>

      {/* Right Player Body */}
      <div className="w-1/3 flex flex-col justify-between">
        <Songcard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
