import React from "react";
import { loginEndpoint } from "../Spotify";

export default function Login() {
  return (
    <div className="bg-[#1f1f1f] h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-orange-500 text-4xl font-bold pd-4 mb-3">Wavify Music Player</h1>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Spotify Logo"
        className="w-1/3" 
      />
      <a href={loginEndpoint} rel="noopener noreferrer">
        <div className="w-52 py-4 text-center bg-white text-[#1f1f1f] font-semibold rounded-full mt-20">
          LOG IN
        </div>
      </a>
    </div>
  );
}
