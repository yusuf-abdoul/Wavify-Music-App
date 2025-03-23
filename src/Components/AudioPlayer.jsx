import React from "react";

export default function AudioPlayer({ title, artist, duration }) {
  return (
    <div className="w-full h-2/5 my-3 flex flex-col items-center justify-center">
      {/* Left Section (for album art or visualizer) */}
      <div className="w-2/5 flex justify-center">
        {/* Placeholder for Album Art */}
        <div className="w-28 h-28 bg-gray-500 rounded-xl"></div>
      </div>

      {/* Right Section (Song Info & Controls) */}
      <div className="w-3/5 flex flex-col items-center justify-between mt-4">
        <h1 className="text-4xl font-bold text-gray-300 text-center truncate">
          {title}
        </h1>
        <p className="text-sm font-medium text-gray-400">{artist}</p>

        {/* Song Progress */}
        <div className="w-1/2 flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-gray-300">0:00</p>
          <div className="w-full mx-2 bg-gray-500 h-1 rounded-lg">
            {/* Progress Bar (Fillable using state) */}
            <div className="w-1/4 bg-blue-400 h-full rounded-lg"></div>
          </div>
          <p className="text-lg font-bold text-gray-300">{duration}</p>
        </div>

        {/* Player Controls (Icons should be added here) */}
        <div className="flex items-center gap-6 mt-4">
          <button className="text-white text-2xl">⏮️</button>
          <button className="text-white text-3xl">⏯️</button>
          <button className="text-white text-2xl">⏭️</button>
        </div>
      </div>
    </div>
  );
}
