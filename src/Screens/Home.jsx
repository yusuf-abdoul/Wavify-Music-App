import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Sidebar from "../Components/Sidebar";
import { setClientToken } from "../Spotify";
import Login from "./Login";
import Favorites from "./Favorites";
import Feed from "./Feed";
import Library from "./Library";
import Player from "./Player";
import Trending from "./Trending";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="h-screen w-screen bg-gray-800 rounded-3xl flex">
      <Sidebar />
      <div className="w-[calc(100%-100px)] h-full bg-[#1e2a3e] rounded-[30px] opacity-100 relative">
        <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center_left,transparent_0,#233656_100px),repeating-linear-gradient(#1e2a3e55,#1e2a3e)]"><Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        </div>
      </div>


    </div>
  );
}
